import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import TitleBar from "./TitleBar";
import Video from "./Video";
import Visibility from "./Visibility";
import Retro from "./Retro";

type TabParams = {
  tab: string;
};

// TecTab 모음집 ! 탭으로 관리 ! Params로 url관리 ! State로 tab 상태관리
function Tab1() {
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.png?raw=true"
      title="영상시정계"
      content="목측을 모사한 가시거리 측정"
    />
  );
}

function Tab2() {
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.png?raw=true"
      title="광학시정계"
      content="LED광원과 Long Path Open Cell 방식을 적용한 시정계"
    />
  );
}

function Tab3() {
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.png?raw=true"
      title="역반사체"
      content="반사 광선을 입사 광선과 평행하게 하기 위한 레이저 광선 역반사 장치"
    />
  );
}

function Tabs() {
  const { tab } = useParams<TabParams>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    } else {
      // URL이 없으면 기본값 (tab1)
      navigate(`/Technology/${activeTab}`);
    }
  }, [tab, activeTab, navigate]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/Technology/${tab}`);
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
          역반사체
        </TabButton>
      </TabButtons>
      <TabContent>
        {activeTab === "tab1" && <Tab1 />}
        {activeTab === "tab2" && <Tab2 />}
        {activeTab === "tab3" && <Tab3 />}
      </TabContent>
      <TabContainer>{activeTab === "tab1" && <Video />}</TabContainer>
      <TabContainer>{activeTab === "tab2" && <Visibility />}</TabContainer>
      <TabContainer>{activeTab === "tab3" && <Retro />}</TabContainer>
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
  cursor: pointer;
  width: 300px;
  font-family: "Pretendard-SemiBold";
  font-size: 28px;
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
    font-size: 18px;
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

const TabContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;
