import React, { useEffect, useRef } from "react";
import { Animate } from "../Components/Main/Animation";
import Company from "../Components/Main/HeadTitle";
import Contents from "../Components/Main/Contents";
import PredictionSection from "../Components/Main/Prediction";
import TestSlide from "../Components/Main/TestSlide";
import styled from "styled-components";

function Main() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const options = {
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

    const animate = new Animate(canvas, options);
  }, []);

  return (
    <MainWrapper>
      <canvas
        id="canvas"
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Company />
      <TestSlide />
      <Contents />
      <PredictionSection />
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  background: linear-gradient(to bottom, #dddddd, #ffffff);
`;
