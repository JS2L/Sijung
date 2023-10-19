import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Fonts/Font.css";

// 기상서비스 메인 내용 ! aos ! 제일 하단에 바로가기 버튼
function Service() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <PageContainer>
        <ImgLeft data-aos="fade-up" data-aos-duration="1000">
          <img src="./Img/Nalgaem1.png" alt="NalgaemImage1" />
        </ImgLeft>
        <ContentContainer>
          <ContentTitleRight
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="190"
            style={{
              color: "#0072ff",
            }}
          >
            01.
            <br />한 눈에 보이는 UI
          </ContentTitleRight>
          <ContentRight data-aos="fade-up" data-aos-duration="1000">
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
          <ContentTitleRight
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              color: "#0072ff",
            }}
          >
            02.
            <br />
            제목을 뭘로할까
          </ContentTitleRight>
          <ContentRight data-aos="fade-up" data-aos-duration="1000">
            내용내용내용내용내용내용
            <br />
            내용내용내용내용내용
            <br />
            내용내용내용내용내용
          </ContentRight>
        </ContentContainer>
        <ImgLeft data-aos="fade-up" data-aos-duration="1000">
          <img src="./Img/Nalgaem2.png" alt="NalgaemImage2" />
        </ImgLeft>
      </PageContainer>
      <PageContainer>
        <ImgLeft data-aos="fade-up" data-aos-duration="1000">
          <img src="./Img/Nalgaem3.png" alt="NalgaemImage3" />
        </ImgLeft>
        <ContentContainer>
          <ContentTitleRight
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              color: "#0072ff",
            }}
          >
            03.
            <br />
            제목제목제목제목
          </ContentTitleRight>
          <ContentRight data-aos="fade-up" data-aos-duration="1000">
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
  padding: 160px 60px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding: 0px;
  }
`;

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    margin-bottom: 10px;
    padding: 0px;
  }
`;

const ImgLeft = styled.div`
  flex: 1.5;
  margin: 10px;
  img {
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const ContentTitleRight = styled.p`
  font-family: "KoPubWorldDotumBold";
  font-size: 30px;
  margin-bottom: 30px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
    margin: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 10px;
    margin: 10px;
  }
`;

const ContentRight = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin: 30px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 15px;
    margin: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 10px;
    margin: 12px;
  }
`;
