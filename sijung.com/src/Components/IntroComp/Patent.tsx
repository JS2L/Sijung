import React, { useState } from "react";
import styled from "styled-components";

// 회사소개 - 인증서&특허증 ! img모음 ! hover size*1.1 효과 ! 클릭시 가운데에서 확대 ! 배열로 관리
function Patent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagePaths: string[] = [
    "/img/Patent1.png",
    "/img/Patent2.png",
    "/img/Patent3.png",
    "/img/Patent4.png",
    "/img/Patent5.png",
    "/img/Patent6.png",
    "/img/Patent7.png",
    "/img/Patent8.png",
    "/img/Patent9.png",
    "/img/Patent10.png",
    "/img/Patent11.png",
    "/img/Patent12.png",
    "/img/Patent13.png",
    "/img/Patent14.jpg",
    "/img/Patent15.jpg",
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
          <img src={imagePath} alt={`특허증 ${index + 1}`} />
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
`;

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 500px; /* 모달 너비를 이미지와 동일하게 설정 */
  height: auto; /* 모달 높이를 이미지와 동일하게 설정 */

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 400px; /* 모달 너비를 이미지와 동일하게 설정 */
    height: auto; /* 모달 높이를 이미지와 동일하게 설정 */
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    width: 300px; /* 모달 너비를 이미지와 동일하게 설정 */
    height: auto; /* 모달 높이를 이미지와 동일하게 설정 */
  }
`;
const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
