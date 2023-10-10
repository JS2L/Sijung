import styled from "styled-components";

function Company() {
  return (
    <div>
      <IntroEn>A.I VIDEO ANALYSIS COMPANY</IntroEn>
      <IntroKo>인공지능 시스템 기술 선도 기업</IntroKo>
      <ShadowEn>SIJUNG</ShadowEn>
    </div>
  );
}

export default Company;

const IntroEn = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 40px;
  color: #0072ff;
  margin-top: 70px;
  margin-left: 100px;
`;

const IntroKo = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-left: 100px;
`;

const ShadowEn = styled.p`
  color: white;
  font-size: 230px;
  font-family: "NEXONLv2GothicBold";
  text-align: right;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  margin-right: 100px;
`;
