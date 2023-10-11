import React from "react";
import Company from "../Components/Common/Company";

import Tabs from "../Components/Product/JSTabs";
import TitleBar from "../Components/Product/TitleBar";

function Product() {
  return (
    <div>
      <Company />
      <Tabs />
      <TitleBar />
    </div>
  );
}

export default Product;
