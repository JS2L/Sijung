import styled from "styled-components";

function Contents() {
  return (
    <Container>
      <ContentItem>
        <Title>AI Weather System</Title>
        <Detail>객관적인 기상정보 정보 데이터화 및 빅데이터 구축</Detail>
      </ContentItem>
      <ContentItem>
        <Title>Air pollution Monitoring System</Title>
        <Detail>
          미세먼지 등 대기오염에 영향을 끼칠수 있는 오염원 물질 모니터링
        </Detail>
      </ContentItem>
      <ContentItem>
        <Title>Surveillance Solution</Title>
        <Detail>
          도시광역감시,스마트시티 솔루션 도로·해상교통 관제 시스템,스마트 팩토리
        </Detail>
      </ContentItem>
      <ContentItem>
        <Title>Big data Business & System Integration</Title>
        <Detail>
          기업의 효율적인 운영을 지원하기 위한 시스템 기획 및 개발, 서비스지원
        </Detail>
      </ContentItem>
    </Container>
  );
}

export default Contents;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;

const ContentItem = styled.div`
  flex: 1;
  padding: 20px;
  border: none;
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Detail = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
