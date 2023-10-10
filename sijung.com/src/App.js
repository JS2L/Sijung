import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Main from "./Pages/Main";
import IntroComp from "./Pages/IntroComp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/IntroComp" element={<IntroComp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
