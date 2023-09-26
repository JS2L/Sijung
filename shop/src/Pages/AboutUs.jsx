import styled from "styled-components";

function ImgContent() {
  return (
    <ContentWrap>
      <AboutUsWrap>
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
          {" "}
          미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것 이라 합니다.
          <br /> 미국 경영학자 피터 드러커의 말처럼 저희는 앞으로 시정계 시장의
          패러다임을 직접 창조해 나가고자 합니다.
        </Paragraph>
        <ParagraphBold>그것이 시정이 꿈꾸는 미래 입니다.</ParagraphBold>
        <Sign>
          President Sintae Chae
          <img src="/img/sign.jpg" alt="President Sintae Chae's Signature" />
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

const Paragraph = styled.p`
  font-size: 21px;
  line-height: 38px;
  margin: 10px 50px 10px 50px;
  padding: 0;
  word-break: break-all;
  font-family: "Noto Sans KR";
`;

const ParagraphBold = styled.p`
  font-size: 24px;
  line-height: 38px;
  margin: 10px 50px 10px 50px;
  padding: 0;
  word-break: break-all;
  font-family: "Noto Sans KR";
  font-weight: 700;
  color: #206fb1;
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
`;
