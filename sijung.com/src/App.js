import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import Company from "./Components/Company";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Company" element={<Company />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
