// Code Pen에서 가져옴
import { TweenLite, Expo } from "gsap";

function defaults(object, src) {
  for (let key in src) {
    if (typeof object[key] === "undefined") {
      object[key] = src[key];
    }
  }
  return object;
}

class Point {
  constructor(position = { x: 0, y: 0 }, ctx, id, options) {
    this.options = options || {};
    this.id = id;
    this.ctx = ctx;
    this.position = position;
    this.origin = { ...this.position };
    this.opacity = 0;
    this.closest = [];
  }

  distanceTo(point, abs = false) {
    const distance =
      Math.pow(this.position.x - point.position.x, 2) +
      Math.pow(this.position.y - point.position.y, 2);
    return abs ? Math.abs(distance) : distance;
  }

  drawLines() {
    this.closest.forEach((closestPoint, i) => {
      if (this.opacity > 0) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        const test = i + 1 < this.closest.length ? i + 1 : 0;
        this.ctx.lineCap = "round";
        this.ctx.strokeStyle = `rgba(${this.options.lineColor}, ${this.opacity})`;
        this.ctx.lineWidth = this.options.lineWidth;
        this.ctx.lineTo(closestPoint.position.x, closestPoint.position.y);
        this.ctx.stroke();
      }
    });
  }

  shift() {
    const _this = this;
    let speed = this.options.speed;

    if (!this.options.sync) {
      speed -= this.options.speed * Math.random();
    }
    TweenLite.to(this.position, speed, {
      x:
        this.origin.x -
        this.options.distance / 2 +
        Math.random() * this.options.distance,
      y:
        this.origin.y -
        this.options.distance / 2 +
        Math.random() * this.options.distance,
      ease: Expo.easeInOut,
      onComplete: function () {
        _this.shift();
      },
    });
  }
}

class Circle {
  constructor(point, ctx, options) {
    this.options = options || {};
    this.point = point || null;
    this.radius = this.options.radius || null;
    this.color = this.options.circleColor || "255, 255, 255";
    this.opacity = 0;
    this.ctx = ctx;
  }

  draw() {
    if (this.opacity > 0) {
      this.ctx.beginPath();
      this.ctx.arc(
        this.point.position.x,
        this.point.position.y,
        this.options.radius,
        0,
        2 * Math.PI,
        false
      );
      this.ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      this.ctx.fill();
    }
  }
}

class Animate {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.options = defaults(options || {}, Animate.defaultOptions);
    this.init();
  }

  static defaultOptions = {
    density: 10,
    speed: 10,
    sync: false,
    distance: 100,
    lineColor: "255, 255, 255",
    circleColor: "255, 255, 255",
    radius: 20,
    lineWidth: 1,
    lines: 3,
    updateClosest: false,
    mouse: true,
  };

  init() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.target = {
      position: { x: this.width / 2, y: this.height / 2 },
    };

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.ctx = this.canvas.getContext("2d");

    window.addEventListener("resize", this.resize.bind(this));

    if (this.options.mouse && !("ontouchstart" in window)) {
      window.addEventListener("mousemove", this.mousemove.bind(this));
    }

    this.points = [];
    for (let x = 0; x < this.width; x += this.width / this.options.density) {
      for (
        let y = 0;
        y < this.height;
        y += this.height / this.options.density
      ) {
        const position = {
          x: x + Math.random() * (this.width / this.options.density),
          y: y + Math.random() * (this.height / this.options.density),
        };
        const point = new Point(
          position,
          this.ctx,
          this.points.length + 1,
          this.options
        );
        this.points.push(point);
        point.circle = new Circle(point, this.ctx, this.options);
      }
    }

    this.findClosest();
    this.animate();
    this.shiftPoints();

    if (!this.options.mouse) {
      this.moveTarget();
    }
  }

  findClosest() {
    this.points.forEach((point) => {
      point.closest = [];
      this.points.forEach((testPoint) => {
        if (point.id !== testPoint.id) {
          let placed = false;
          for (let k = 0; k < this.options.lines; k++) {
            if (!placed) {
              if (typeof point.closest[k] === "undefined") {
                point.closest[k] = testPoint;
                placed = true;
              }
            }
          }
          for (let k = 0; k < this.options.lines; k++) {
            if (!placed) {
              if (
                point.distanceTo(testPoint) < point.distanceTo(point.closest[k])
              ) {
                point.closest[k] = testPoint;
                placed = true;
              }
            }
          }
        }
      });
    });
  }

  animate() {
    if (this.options.updateClosest) {
      this.findClosest();
    }
    this.points.forEach((point) => {
      const distance = point.distanceTo(this.target, true);
      if (distance < 5000) {
        point.opacity = 0.4;
        point.circle.opacity = 0.6;
      } else if (distance < 10000) {
        point.opacity = 0.2;
        point.circle.opacity = 0.3;
      } else if (distance < 30000) {
        point.opacity = 0.1;
        point.circle.opacity = 0.2;
      } else {
        point.opacity = 0.05;
        point.circle.opacity = 0.05;
      }
    });
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.points.forEach((point) => {
      point.drawLines();
      point.circle.draw();
    });
    window.requestAnimationFrame(this.animate.bind(this));
  }

  shiftPoints() {
    this.points.forEach((point) => {
      point.shift();
    });
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  mousemove(event) {
    if (event.pageX || event.pageY) {
      this.target.position.x = event.pageX;
      this.target.position.y = event.pageY;
    } else if (event.clientX || event.clientY) {
      this.target.position.x =
        event.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      this.target.position.y =
        event.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
  }

  moveTarget() {
    const _this = this;
    TweenLite.to(this.target.position, 2, {
      x: Math.random() * (this.width - 200) + 100,
      y: Math.random() * (this.height - 200) + 100,
      ease: Expo.easeInOut,
      onComplete: () => {
        _this.moveTarget();
      },
    });
  }
}

export { Animate, defaults };
