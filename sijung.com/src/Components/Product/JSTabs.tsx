import React, { useState } from "react";
import styled from "styled-components";

import JS02P from "./JS02P";
import JS06 from "./JS06";
import JS08 from "./JS08";
import TitleBar from "./TitleBar";

function Tab1() {
  return (
    <TitleBar
      backgroundImage="/img/TitleBarBG.png"
      title="JS-02P"
      content="인공지능 자동 기상 관측 장비"
    />
  );
}

function Tab2() {
  return (
    <TitleBar
      backgroundImage="/img/TitleBarBG.png"
      title="JS-02P"
      content="인공지능 영상 분석 시정계"
    />
  );
}

function Tab3() {
  return (
    <TitleBar
      backgroundImage="/img/TitleBarBG.png"
      title="JS-02P"
      content="인공지능 파노라마 영상 분석 시정계"
    />
  );
}

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
          JS-02P
        </TabButton>
        <TabButton
          onClick={() => handleTabClick("tab2")}
          active={activeTab === "tab2"}
        >
          JS-06
        </TabButton>
        <TabButton
          onClick={() => handleTabClick("tab3")}
          active={activeTab === "tab3"}
        >
          JS-08
        </TabButton>
      </TabButtons>
      <TabContent>
        {activeTab === "tab1" && <Tab1 />}
        {activeTab === "tab2" && <Tab2 />}
        {activeTab === "tab3" && <Tab3 />}
      </TabContent>
      {activeTab === "tab1" && <JS02P />}
      {activeTab === "tab2" && <JS06 />}
      {activeTab === "tab3" && <JS08 />}
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
  font-family: "Pretendard-SemiBold";
  font-size: 30px;
  margin-left: 130px;
  margin-right: 130px;
  padding: 10px;
  z-index: 1;
`;

const TabButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#0077ff" : "white")};
  color: ${(props) => (props.active ? "white" : "gray")};
  border: 0px solid #ccc;
  padding: 50px 80px;
  cursor: pointer;
  border-radius: 7px;
  margin: 20px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: lightblue;
    color: black;
  }
`;

const TabContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;