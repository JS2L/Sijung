import React, { useState } from "react";
import styled from "styled-components";

import Video from "./Video";
import Visibility from "./Visibility";
import Retro from "./Retro";

// 보유기술 탭 ! url작업 고민중
function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer>
      <TabButtons>
        <TabButton
          onClick={() => handleTabClick("tab1")}
          active={activeTab === "tab1"}
        >
          영상시정계
        </TabButton>
        <TabButton
          onClick={() => handleTabClick("tab2")}
          active={activeTab === "tab2"}
        >
          광학시정계
        </TabButton>
        <TabButton
          onClick={() => handleTabClick("tab3")}
          active={activeTab === "tab3"}
        >
          RETRO REFLECTOR
        </TabButton>
      </TabButtons>
      <TabContent>
        {activeTab === "tab1" && <Video />}
        {activeTab === "tab2" && <Visibility />}
        {activeTab === "tab3" && <Retro />}
      </TabContent>
    </TabsContainer>
  );
}

export default Tabs;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TabButtons = styled.div`
  display: flex;
  justify-content: center;

  margin-left: 130px;
  margin-right: 130px;
  padding: 10px;
  z-index: 1;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-left: 70px;
    margin-right: 70px;
    padding: 0px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#0077ff" : "white")};
  color: ${(props) => (props.active ? "white" : "gray")};
  border: 0px solid #ccc;
  padding: 50px 80px;
  max-width: 300px;
  cursor: pointer;
  font-family: "Pretendard-SemiBold";
  font-size: 30px;
  border-radius: 7px;
  margin: 20px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: lightblue;
    color: black;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 23px;
    padding: 40px 40px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 17px;
    padding: 20px 20px;
    margin: 5px 5px 55px;
  }
`;

const TabContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
