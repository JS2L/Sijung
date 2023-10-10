import styled from "styled-components";
import "../../Assets/Fonts/Font.css";

function Contents() {
  return (
    <Container>
      <ContentItem>
        <Title>AI Weather System</Title>
        <Detail>객관적인 기상정보 정보 데이터화 및 빅데이터 구축</Detail>
      </ContentItem>
      <ContentItem>
        <Title>Air Pollution Monitoring System</Title>
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
        <Title>Big Data Business & System Integration</Title>
        <Detail>
          기업의 효율적인 운영을 지원하기 위한 시스템 기획 및 개발, 서비스지원
        </Detail>
      </ContentItem>
    </Container>
  );
}

export default Contents;

// 초기에는 배경 없음, 배경 이미지 전환 효과, 초기 텍스트 색상 설정
// 마우스 호버 시 배경 이미지 설정, 마우스 호버 시 텍스트 색상을 흰색으로 변경
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  background: none;
  transition: background 0.3s ease;
  color: black;
  &:hover {
    background: url("/img/Transmittance_1.jpg") center/cover no-repeat;
    color: white;
  }
`;

// 애니메이션 적용, 마우스 호버 시 요소 확대, 그림자 효과 추가
const ContentItem = styled.div`
  flex: 1;
  padding: 20px;
  border: none;
  text-align: center;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.div`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Detail = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
