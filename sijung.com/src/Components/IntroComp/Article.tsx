import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// 회사소개 - 보도자료의 뼈대 ! 타입관리 및 스타일 관리
interface ArticleProps {
  imageSrc: string;
  title: string;
  summary: string;
  source: string;
}

const Article: React.FC<ArticleProps> = ({
  imageSrc,
  title,
  summary,
  source,
}) => {
  const { t } = useTranslation();
  return (
    <ArticleContainer>
      <ArticleImage>
        <a href={source} target="_blank" rel="noopener noreferrer">
          <img loading="lazy" src={imageSrc} alt="Article" />
        </a>
      </ArticleImage>
      <ArticleContent>
        <ArticleTitle>
          <a href={source} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </ArticleTitle>
        <ArticleSummary>{summary}</ArticleSummary>
        <ArticleSource>
          {t("출처")} {source}
        </ArticleSource>
      </ArticleContent>
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin: 50px;
  }

  @media all and (max-width: 767px) {
    margin: 10px;
  }
`;

const ArticleImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: auto 0;
    object-fit: cover;
    width: 534px;
    height: 280px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-right: 60px;
    img {
      width: 100%;
      height: auto 0;
      object-fit: cover;
      width: 370px;
      height: 250px;
    }
  }

  @media all and (max-width: 767px) {
    margin-right: 60px;
    img {
      display: none;
    }
  }
`;

const ArticleContent = styled.div`
  flex: 2;
  padding: 10px;
  max-width: 750px;
`;

const ArticleTitle = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 20px;
  margin-bottom: 30px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 17px;
  }

  @media all and (max-width: 767px) {
    font-size: 13px;
  }
`;

const ArticleSummary = styled.div`
  font-family: "Pretendard-Medium";
  margin-bottom: 30px;
  max-width: 500px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 12px;
  }

  @media all and (max-width: 767px) {
    font-size: 9px;
  }
`;

const ArticleSource = styled.div`
  font-family: "Pretendard-Bold";
  color: #888;
  font-size: 13px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 11px;
  }

  @media all and (max-width: 767px) {
    font-size: 7px;
  }
`;
