import React from "react";

// 공용 컴포넌트
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScroollToTop";

// 화면배치 컴포넌트
import Main from "./Pages/Main";
import IntroComp from "./Pages/IntroComp";
import Product from "./Pages/Product";
import Technology from "./Pages/Technology";
import Nalgaem from "./Pages/Nalgaem";
import Mozaic from "./Pages/Visibility";

// BrowserRouter를 통한 url 설정
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/IntroComp/:tab" element={<IntroComp />}></Route>
          <Route path="/Product/:tab" element={<Product />}></Route>
          <Route path="/Technology/:tab" element={<Technology />}></Route>
          <Route path="/Nalgaem" element={<Nalgaem />}></Route>
          <Route path="/Mozaic" element={<Mozaic />}></Route>
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
