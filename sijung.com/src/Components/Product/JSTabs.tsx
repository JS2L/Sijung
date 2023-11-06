import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import JS02P from "./JS02P";
import JS06 from "./JS06";
import JS08 from "./JS08";
import TitleBar from "./TitleBar";

type TabParams = {
  tab: string;
};

// JS-02P, JS-06, JS-08 모음집 ! 탭으로 관리 ! Params로 url관리 ! State로 tab 상태관리
function Tab1() {
  const { t } = useTranslation();
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.webp?raw=true"
      title="JS-02P"
      content={t("인공지능 자동 기상 관측 장비")}
    />
  );
}

function Tab2() {
  const { t } = useTranslation();
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.webp?raw=true"
      title="JS-06"
      content={t("인공지능 영상 분석 시정계")}
    />
  );
}

function Tab3() {
  const { t } = useTranslation();
  return (
    <TitleBar
      backgroundImage="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/TitlebarBG.webp?raw=true"
      title="JS-08"
      content={t("인공지능 파노라마 영상 분석 시정계")}
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
      navigate(`/Product/${activeTab}`);
    }
  }, [tab, activeTab, navigate]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/Product/${tab}`);
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
