import React from "react";
import Article from "./Article";

// 회사소개 - 보도자료 ! (주)시정의 기사를 모아둠 ! 사진 or 제목 클릭시 기사로 이동 ! 배열로 관리
const News: React.FC = () => {
  const articles = [
    {
      imageSrc: "/Img/News1.jpg",
      title:
        "[인터뷰] 채신태 시정 대표 “스마트시티 환경 업그레이드시킬 기상 데이터 제공”",
      summary:
        "[보안뉴스 엄호식 기자] 시정은 인공지능(AI)을 이용한 자동기상관측장비를 만드는 회사로 사람이 눈으로 보이는 최대거리인 ‘가시거리’를 정량화한 ‘시정(視程, visibility)’과 같은 의미를 지니고 있다.",
      source: "https://www.boannews.com/media/view.asp?idx=91552&kind=",
    },
    {
      imageSrc: "/Img/NewsNo.jpg",
      title: "[미리보는 SECON & eGISEC 2022] 송우인포텍·스마티·시정",
      summary:
        "시정은 2016년 창립 이래 뛰어난 기술력과 우수한 품질을 바탕으로 고객 만족을 실현해온 AI 영상 장비 제품 제조 회사다.",
      source: "https://www.boannews.com/media/view.asp?idx=106040&kind=",
    },
    {
      imageSrc: "/Img/News3.jpg",
      title: "세종대-시정, 기술·서비스 연계 및 인프라 활용한 산학협력 체결",
      summary:
        "세종대 인공지능·빅데이터연구센터는 지난 10월 18일 인공지능을 이용한 시정계 제조·판매기업 '시정'과 기술·서비스 연계 및 인프라 활용에 관한 산학협력 양해각서를 체결했다고 18일 밝혔다.",
      source: "https://www.mediapen.com/news/view/402396",
    },
    {
      imageSrc: "/Img/News4.jpg",
      title: "2018 기상기후산업박람회(KCMIE 2018)에서 만나는 국내 유망 기업",
      summary:
        "(주)시정은 한국표준과학원의 기술 출자로 설립된 연구소 기업이다. 출자받은 시정계 기술을 바탕으로 광학 시정계 뿐만 아니라 영상시정계까지 개발을 하고 있다. 인공지능을 이용한 영상 시정계의 경우 세계 최초로 상용화를 하려고 하고 있으며 관련 특허도 다수 보유중에 있다.",
      source: "https://kr.aving.net/news/articleView.html?idxno=1430377",
    },
  ];

  return (
    <div>
      {articles.map((article, index) => (
        <Article
          key={index}
          imageSrc={article.imageSrc}
          title={article.title}
          summary={article.summary}
          source={article.source}
        />
      ))}
    </div>
  );
};

export default News;
