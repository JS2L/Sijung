import React from "react";
import styled from "styled-components";

// 기상서비스 메인 내용 ! aos 넣기
function Service() {
  return (
    <Container>
      <PageContainer>
        <ImgLeft>
          <img src="./Img/Nalgaem1.png" alt="MozaicImage1" />
        </ImgLeft>
        <ContentContainer>
          <ContentTitleRight>
            01.
            <br />한 눈에 보이는 UI
          </ContentTitleRight>
          <ContentRight>
            가독성이 좋은 디자인으로
            <br />
            쉽게 원하는 정보를
            <br />
            찾아 갈 수 있습니다
          </ContentRight>
        </ContentContainer>
      </PageContainer>
      <PageContainer>
        <ContentContainer>
          <ContentTitleRight>
            02.
            <br />
            제목을 뭘로할까
          </ContentTitleRight>
          <ContentRight>
            내용내용내용내용내용내용
            <br />
            내용내용내용내용
            <br />
            내용내용내용내용내용
          </ContentRight>
        </ContentContainer>
        <ImgLeft>
          <img src="./Img/Nalgaem2.png" alt="MozaicImage2" />
        </ImgLeft>
      </PageContainer>
      <PageContainer>
        <ImgLeft>
          <img src="./Img/Nalgaem3.png" alt="MozaicImage3" />
        </ImgLeft>
        <ContentContainer>
          <ContentTitleRight>
            03.
            <br />
            제목제목제목제목
          </ContentTitleRight>
          <ContentRight>
            App Store, Google Play
            <br />
            모두 호환 어쩌구 저쩌구
            <br />
          </ContentRight>
        </ContentContainer>
      </PageContainer>
    </Container>
  );
}

export default Service;

const Container = styled.div`
  padding: 80px;
`;

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;

const ImgLeft = styled.div`
  flex: 1.4;
  margin: 30px;
  img {
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const ContentTitleRight = styled.p`
  font-family: "KoPubWorldDotumBold";
  font-size: 30px;
  margin: 50px;
`;

const ContentRight = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin: 50px;
`;
