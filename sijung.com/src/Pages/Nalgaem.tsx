import React from "react";
import Uione from "../Components/Nalgaem/Uione";
import Uitwo from "../Components/Nalgaem/Uitwo";
import Uithree from "../Components/Nalgaem/Uithree";
import styled from "styled-components";

import { SectionsContainer, Section } from "react-fullpage";

// 기상서비스 화면배치
function Nalgaem() {
  const options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["One", "Two", "Three"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    delay: 1500, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
  };

  return (
    <MainSection>
      <SectionsContainer {...options}>
        <Section>
          <Uione />
        </Section>
        <Section>
          <Uitwo />
        </Section>
        <Section>
          <Uithree />
        </Section>
      </SectionsContainer>
    </MainSection>
  );
}

export default Nalgaem;

const MainSection = styled.section`
  overflow: hidden;
`;
