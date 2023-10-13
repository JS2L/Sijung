import React from "react";

import SlideImg from "../Components/Main/SlideImg";
import Contents from "../Components/Main/Contents";
import PredictionSection from "../Components/Main/Prediction";

// 메인페이지 화면배치
function Main() {
  return (
    <div>
      <SlideImg />
      <Contents />
      <PredictionSection />
    </div>
  );
}

export default Main;
