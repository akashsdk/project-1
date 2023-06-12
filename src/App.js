import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";


import WrongPage from "./Component/WrongPage";
import Home from'./Screen/Home.js';
import Header from './Component/Header';
import Index from "./Screen/Index";
import Footer from './Component/Footer';
import About from "./Screen/About";
import Contact from "./Screen/ContactUs";
import Login from "./Screen/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Header/>
        <Routes>
        <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          
        </Routes>
      <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
