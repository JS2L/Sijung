import React, { useState } from "react";
import styled from "styled-components";

import AboutUs from "./AboutUs";
import History from "./History";

function Tab1() {
  return <AboutUs />;
}

function Tab2() {
  return <History />;
}

function Tab3() {
  return <div>탭 3 내용</div>;
}

function Tab4() {
  return <div>탭 4 내용</div>;
}

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer>
      <TabButtons>
        <TabButton
          onClick={() => handleTabClick("tab1")}
          active={activeTab === "tab1"}
        >
          CEO 소개
        </TabButton>
        <TabButton
          onClick={() => handleTabClick("tab2")}
          active={activeTab === "tab2"}
        >
          회사 연혁
        </TabButton>
        <TabButton
          onClick={() => handleTabClick("tab3")}
          active={activeTab === "tab3"}
        >
          인증서&특허증
        </TabButton>
        <TabButton
          onClick={() => handleTabClick("tab4")}
          active={activeTab === "tab4"}
        >
          보도자료
        </TabButton>
      </TabButtons>
      <TabContent>
        {activeTab === "tab1" && <Tab1 />}
        {activeTab === "tab2" && <Tab2 />}
        {activeTab === "tab3" && <Tab3 />}
        {activeTab === "tab4" && <Tab4 />}
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
  font-family: "Pretendard-SemiBold";
  font-size: 30px;
  margin-left: 130px;
  margin-right: 130px;
  padding: 10px;
`;

const TabButton = styled.button`
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
