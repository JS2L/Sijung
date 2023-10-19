import React from "react";
import Company from "../Components/Common/HeadTitle";
import Tabs from "../Components/Product/JSTabs";
import ImgSlide from "../Components/Product/ImgSlide";

// 제품소개 화면배치
function Product() {
  return (
    <div>
      <Company />
      <Tabs />
      <ImgSlide />
    </div>
  );
}

export default Product;
