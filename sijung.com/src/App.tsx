import React from "react";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Main from "./Pages/Main";
import IntroComp from "./Pages/IntroComp";
import Product from "./Pages/Product";
import Technology from "./Pages/Technology";
import Nalgaem from "./Pages/Nalgaem";
import Mozaic from "./Pages/Visibility";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/IntroComp" element={<IntroComp />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Technology" element={<Technology />}></Route>
          <Route path="/Nalgaem" element={<Nalgaem />}></Route>
          <Route path="/Mozaic" element={<Mozaic />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
