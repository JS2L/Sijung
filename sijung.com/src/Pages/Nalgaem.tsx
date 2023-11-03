import React from "react";
import Uione from "../Components/Nalgaem/Uione";
import Uitwo from "../Components/Nalgaem/Uitwo";
import Uithree from "../Components/Nalgaem/Uithree";
import styled from "styled-components";

// 기상서비스 화면배치
function Nalgaem() {
  return (
    <MainSection>
      <Uione />
      <Uitwo />
      <Uithree />
    </MainSection>
  );
}

export default Nalgaem;

const MainSection = styled.section`
  overflow: hidden;
`;
