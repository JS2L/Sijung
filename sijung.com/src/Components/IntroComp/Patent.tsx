import React, { useState } from "react";
import styled from "styled-components";

// 회사소개 - 인증서&특허증 ! img모음 ! hover size*1.1 효과 ! 클릭시 가운데에서 확대 ! 배열로 관리
function Patent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagePaths: string[] = [
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent1.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent2.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent3.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent4.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent5.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent6.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent7.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent8.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent9.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent10.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent11.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent12.png?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent14.jpg?raw=true",
    "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Patent15.jpg?raw=true",
  ];

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <ImageList>
      {imagePaths.map((imagePath, index) => (
        <ImageItem key={index} onClick={() => openModal(imagePath)}>
          <img loading="lazy" src={imagePath} alt={`특허증 ${index + 1}`} />
        </ImageItem>
      ))}
      {selectedImage && (
        <ModalBackground onClick={closeModal}>
          <Modal>
            <ModalImage src={selectedImage} alt="확대된 이미지" />
          </Modal>
        </ModalBackground>
      )}
    </ImageList>
  );
}

export default Patent;

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    height: 80%;
    padding: 0px;
  }
  @media all and (max-width: 359px) {
    height: 80%;
    padding: 0px;
  }
`;

const ImageItem = styled.div`
  width: 403px;
  height: 570px;
  margin: 15px;
  overflow: hidden;
  flex: 0 0 403px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    transform: scale(0.9);
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    transform: scale(0.8);
  }

  @media all and (max-width: 359px) {
    transform: scale(0.7);
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 500px;
  height: auto;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 400px;
    height: auto;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    width: 250px;
    height: auto;
  }

  @media all and (max-width: 359px) {
    width: 200px;
    height: auto;
  }
`;
const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
