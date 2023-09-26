import Carousel from "react-bootstrap/Carousel";

function SlideImg() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/transmittance_2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>JS-02P</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/transmittance_2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>JS-06</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/transmittance_2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>JS-08</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideImg;
