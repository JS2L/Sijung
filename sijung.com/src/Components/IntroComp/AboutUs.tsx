import React from "react";
import styled from "styled-components";

// 회사소개 - CEO 소개 ! 싸인만 img ! img MQ 넣어야함...
function ImgContent() {
  return (
    <ContentWrap>
      <AboutUsWrap>
        <ParagraphTitle>
          "뛰어난 기술력과 우수한 품질을 바탕으로
          <br />
          고객 만족을 실현하는 기업, (주)시정 입니다."
        </ParagraphTitle>
        <Paragraph>
          (주)시정은 한국표준과학원의 기술 출자로 설립된 연구소 기업입니다.
          <br />
          출자받은 시정계 기술을 바탕으로 광학 시정계 뿐만 아니라 영상시정계까지
          개발을 하고 있습니다.
          <br /> 인공지능을 이용한 영상 시정계의 경우 세계 최초로 상용화를
          하려고 하고 있으며,
          <br /> 관련 특허도 다수 보유중에 있습니다.
        </Paragraph>
        <Paragraph>
          미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것 이라 합니다.
          <br /> 미국 경영학자 피터 드러커의 말처럼 저희는 앞으로 시정계 시장의
          패러다임을 직접 창조해 나가고자 합니다.
        </Paragraph>
        <ParagraphBold>그것이 시정이 꿈꾸는 미래 입니다.</ParagraphBold>
        <Sign>
          President Sintae Chae
          <img
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/sign.jpg?raw=true"
            alt="President Sintae Chae's Signature"
          />
        </Sign>
      </AboutUsWrap>
    </ContentWrap>
  );
}

export default ImgContent;

const ContentWrap = styled.div`
  .aboutUs_wrap {
    width: 100%;
    max-width: 1540px;
    margin: 0 auto;
    padding: 2% 0;
  }
`;

const AboutUsWrap = styled.div`
  width: 100%;
  max-width: 1540px;
  margin: 0 auto;
  padding: 2% 0;

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const ParagraphTitle = styled.p`
  font-size: 24px;
  line-height: 38px;
  margin: 10px 50px 10px 50px;
  padding: 0;
  word-break: break-all;
  font-family: "Pretendard-Bold", sans-serif;
  font-weight: 700;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 19px;
    margin: 10px 30px 10px 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 15px;
    margin: 10px 10px 10px 10px;
  }
`;

const Paragraph = styled.p`
  font-size: 21px;
  line-height: 38px;
  margin: 10px 50px 10px 50px;
  padding: 0;
  word-break: break-all;
  font-family: "Pretendard-Black", sans-serif;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
    margin: 10px 30px 10px 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 12px;
    margin: 10px 10px 10px 10px;
  }
`;

const ParagraphBold = styled.p`
  font-size: 24px;
  line-height: 38px;
  margin: 10px 50px 10px 50px;
  padding: 0;
  word-break: break-all;
  font-family: "Pretendard-Black", sans-serif;
  font-weight: 700;
  color: #206fb1;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 12px;
  }
`;

const Sign = styled.p`
  font-size: 24px;
  margin: 10px 50px 10px 50px;
  padding: 0;
  word-break: break-all;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
  text-align: end;
  font-family: "Godo", sans-serif;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
