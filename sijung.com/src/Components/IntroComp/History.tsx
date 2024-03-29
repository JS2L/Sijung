import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// 회사소개 - 회사 연혁 ! 배열로 관리 ! 2023추가 예정
function History() {
  const { t } = useTranslation();
  const data = [
    {
      year: "2023",
      contents: [
        t("관광사업자 등록"),
        t("상생협력 제품 등록"),
        t("산학연 콜라보 예비연구 수행  완료 후 본과제 선정"),
        t("중소환경가옵 사업화 지원사업 선정"),
        t("관광기업 혁신바우처 지원사업 선정"),
      ],
    },
    {
      year: "2022",
      contents: [
        t("대전 본사 이전"),
        t("해양 수산 창업 기업 선정"),
        t("해양 선박 플랜트 연구소와 무인선박 시정계 공통연구"),
        t("속속 SOC 대국민 아이디어 공모전 우수상 수상"),
      ],
    },
    {
      year: "2021",
      contents: [
        t("공군 구매조건부 R&D 사업 진행"),
        t("조달청 혁신 시제품 등록"),
        t("혁신제품 지정(JS-02P)"),
        t("혁신제품 지정(JS-06)"),
        t("해양 방산기술 혁신 아이디어 경진대회 우수상 수상"),
      ],
    },
    {
      year: "2020",
      contents: [
        t("기상청 `스마트시티 사업`"),
        t("대전 TP `드론 스테이션 기상장비 설치`사업"),
        t("한서대 파노라마형 인공지능 시정 시스템 설치"),
        t("데이터바우처 공급기업 등록"),
      ],
    },
    {
      year: "2019",
      contents: [
        t("한국 표준 과학 연구원 기술 이전 및 기업인가"),
        t("소프트웨어 사업자 등록"),
        t("벤처나라 등록 (조달청)"),
      ],
    },
    {
      year: "2018",
      contents: [
        t("SW융합 클러스터 사업"),
        t("우즈베키스탄 기상청 납품 완료"),
        t("공군 비행장 납품 완료"),
        t("수자원공사(시화호) 납품 완료"),
      ],
    },
    {
      year: "2017",
      contents: [
        t("회사 공장 등록"),
        t("천문연구원 기술 이전"),
        t("기상 사업자 기상 장비 업체 등록"),
        t("크라우드 펀딩 성공"),
      ],
    },
    {
      year: "2016",
      contents: [t("대덕특구 內 法人 설립"), t("벤처기업 인증")],
    },
  ];

  return (
    <HisContainer>
      <Container>
        <Title1st>HISTORY</Title1st>
        <Title2nd>A.I. {t("혁신적인 기술력의 회사")}</Title2nd>
        {data.map((item, index) => (
          <YearItem key={index}>
            <Year>{item.year}</Year>
            <Divider />
            <Contents>
              {item.contents.map((content, idx) => (
                <ContentItem key={idx}>{content}</ContentItem>
              ))}
            </Contents>
          </YearItem>
        ))}
      </Container>
    </HisContainer>
  );
}

export default History;

// Title 애니메이션 넣을지 고민하기

const Title1st = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 35px;
  color: #0072ff;
  margin-bottom: -7px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 28px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 21px;
  }
  @media all and (max-width: 359px) {
    font-size: 21px;
  }
`;

const Title2nd = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 25px;
  margin-bottom: 80px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 28px;
    margin-bottom: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 21px;
    margin-bottom: 30px;
  }
  @media all and (max-width: 359px) {
    font-size: 17px;
    margin-bottom: 20px;
  }
`;

const HisContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;

const Container = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
`;

const YearItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: flex-center;
  justify-content: flex-center;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 28px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 21px;
  }
  @media all and (max-width: 359px) {
    font-size: 18px;
  }
`;

const Year = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-right: 30px;
  width: 60px;
  text-align: right;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 28px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 21px;
  }
  @media all and (max-width: 359px) {
    font-size: 18px;
    margin-top: 10px;
    margin-right: 10px;
  }
`;

const Divider = styled.div`
  height: 30px;
  width: 2px;
  background-color: #000;
  margin: 12px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 28px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 19px;
  }
  @media all and (max-width: 359px) {
    font-size: 16px;
  }
`;

const Contents = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 28px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 19px;
  }
  @media all and (max-width: 359px) {
    font-size: 16px;
  }
`;

const ContentItem = styled.div`
  margin-bottom: 12px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 28px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 19px;
  }
  @media all and (max-width: 359px) {
    font-size: 16px;
  }
`;
