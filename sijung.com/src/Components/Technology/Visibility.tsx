import React from "react";
import styled from "styled-components";

function Visibility() {
  return (
    <Container>
      <Title>광학시정계 - 광투과율 방식</Title>
      <Content>
        광원에서 출사되는 광원이 광원과 검출기 사이의 모든 광경로 상의 대기를
        통과,
        <br />
        이때 광경로에 존재하는 광흡수 및 광산란 물질(안개,미세먼지,유해가스)로
        인해 초기 광원의 세기가 변화하며
        <br />
        이를 광검출기를 통해 검출하고 검출된 광원의 세기를 Lambert-Beer 법칙을
        적용하여 가시거리를 계산한다.
      </Content>
    </Container>
  );
}

export default Visibility;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-size: 25px;
  font-family: "KoPubDotum-Bold";
  margin-top: 50px;
`;

const Content = styled.p`
  font-size: 20px;
  font-family: "KoPubDotum-Medium";
  margin-top: 50px;
`;
