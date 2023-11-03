import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import AboutUs from "./AboutUs";
import History from "./History";
import Patent from "./Patent";
import News from "./News";
import TitleBar from "./TitleBar";

type TabParams = {
  tab: string;
};

// 회사소개 모음집 ! 탭으로 관리 ! Params로 url관리 ! State로 tab 상태관리
function Tab1() {
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.png?raw=true"
      title="CEO 소개"
      content="(주)시정 채신태 대표를 소개합니다"
    />
  );
}

function Tab2() {
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.png?raw=true"
      title="회사 연혁"
      content="(주)시정이 걸어온 길"
    />
  );
}

function Tab3() {
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.png?raw=true"
      title="인증서&특허증"
      content="인증서와 특허증 모음"
    />
  );
}

function Tab4() {
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.png?raw=true"
      title="보도 자료"
      content="(주)시정의 주요 기사들"
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
      navigate(`/IntroComp/${activeTab}`);
    }
  }, [tab, activeTab, navigate]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/IntroComp/${tab}`);
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
          보도 자료
        </TabButton>
      </TabButtons>
      <TabContent>
        {activeTab === "tab1" && <Tab1 />}
        {activeTab === "tab2" && <Tab2 />}
        {activeTab === "tab3" && <Tab3 />}
        {activeTab === "tab4" && <Tab4 />}
      </TabContent>
      {activeTab === "tab1" && <AboutUs />}
      {activeTab === "tab2" && <History />}
      {activeTab === "tab3" && <Patent />}
      <Tab4Container>{activeTab === "tab4" && <News />}</Tab4Container>
    </TabsContainer>
  );
}

export default Tabs;

const Tab4Container = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;

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
  font-size: 24px;
  border-radius: 7px;
  margin: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: lightblue;
    color: black;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 21px;
    padding: 40px 40px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 16px;
    padding: 20px 20px;
    margin: 2px 2px 55px;
  }
`;

const TabContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
