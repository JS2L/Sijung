import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// 회사소개 - CEO 소개 ! 싸인만 img ! img MQ 넣어야함...
function ImgContent() {
  const { t } = useTranslation();
  return (
    <Container>
      <ContentWrap>
        <AboutUsWrap>
          <ParagraphTitle
            dangerouslySetInnerHTML={{
              __html: t("ParagraphTitle"),
            }}
          ></ParagraphTitle>
          <Paragraph
            dangerouslySetInnerHTML={{
              __html: t("Paragraph"),
            }}
          ></Paragraph>
          <Paragraph
            dangerouslySetInnerHTML={{
              __html: t("Paragraph2"),
            }}
          ></Paragraph>
          <ParagraphBold
            dangerouslySetInnerHTML={{
              __html: t("ParagraphBold"),
            }}
          ></ParagraphBold>
          <Sign>
            President Sintae Chae
            <img
              loading="lazy"
              src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/sign.jpg?raw=true"
              alt="President Sintae Chae's Signature"
            />
          </Sign>
        </AboutUsWrap>
      </ContentWrap>
    </Container>
  );
}

export default ImgContent;

const Container = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;

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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
    font-size: 12px;
  }
`;
