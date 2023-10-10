import React from "react";
import styled from "styled-components";

function History() {
  const data = [
    { year: "2022", contents: ["공군 구매조건부 R&D 사업 진행 중"] },
    {
      year: "2021",
      contents: ["공군 구매조건부 R&D 사업 진행", "조달청 혁신 시제품 등록"],
    },
    {
      year: "2020",
      contents: [
        "기상청 `스마트시티 사업`",
        "대전 TP `드론 스테이션 기상장비 설치`사업",
        "한서대 파노라마형 인공지능 시정 시스템 설치",
      ],
    },
    {
      year: "2019",
      contents: [
        "한국 표준 과학 연구원 기술 이전 및 기업인가 (연구소 기업 인가)",
        "소프트웨어 사업자 등록",
        "벤처나라 등록 (조달청)",
      ],
    },
    {
      year: "2018",
      contents: [
        "SW융합 클러스터 사업",
        "우즈베키스탄 기상청 납품 완료",
        "공군 비행장 납품 완료",
        "수자원공사(시화호) 납품 완료",
      ],
    },
    {
      year: "2017",
      contents: [
        "회사 공장 등록",
        "천문연구원 기술 이전",
        "기상 사업자 기상 장비 업체 등록",
        "크라우드 펀딩 성공",
      ],
    },
    { year: "2016", contents: ["대덕특구 內 法人 설립", "벤처기업 인증"] },
  ];

  return (
    <Container>
      <Title1st>HISTORY</Title1st>
      <Title2nd>A.I. 혁신적인 기술력의 회사</Title2nd>
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
  );
}

export default History;

// Title 애니메이션 넣을지 고민하기

const Title1st = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 35px;
  color: #0072ff;
  margin-bottom: -7px;
`;

const Title2nd = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-bottom: 50px;
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
  margin-right: 20px;
  margin-left: 300px;
`;

const Year = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-right: 30px;
  width: 60px;
  text-align: right;
`;

const Divider = styled.div`
  height: 30px;
  width: 2px;
  background-color: #000;
  margin: 12px;
`;

const Contents = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const ContentItem = styled.div`
  margin-bottom: 12px;
`;
