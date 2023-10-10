import styled from "styled-components";

function History() {
  return (
    <Container>
      <Years>
        2023
        <br />
        2022
      </Years>
      <Contents>공군 구매조건부 R&D 사업 진행중</Contents>
    </Container>
  );
}

export default History;

const Container = styled.div``;

const Years = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 40px;
`;

const Contents = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
`;
