import React, { useState } from "react";
import Home from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/article";
import Accordion from "./pages/about";
import Product from "./comps/product";
import T1 from "./pages/takanon/t1";
import T2 from "./pages/takanon/t2";
import T3 from "./pages/takanon/t3";
import T4 from "./pages/takanon/t4";
import T5 from "./pages/takanon/t5";
import T6 from "./pages/takanon/t6";
import Blogs from "./pages/blogs";
import Blog from "./pages/blog";
import MyDropzone from "./pages/myDropzone";
import Qa from "./pages/qa-an";
import Footer from "./comps/footer";
import Trade from "./pages/trade-in";
import "./comps/style/socialIcons.css";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

function App() {
  const [showIcons, setShowIcons] = useState(false);

  const handleXmarkClick = () => {
    setShowIcons(!showIcons);
  }
  return (
    <div className="wrapper">
      <div style={{
        position: "relative", top: 0,
        display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", width: "100%", height: "100px"
      }}>
        <h2 style={{ color: "white" }}>מהבורסה</h2>
        <img src="/images/logo.jpeg" style={{ width: "100px" }} />
        {/* <button className="login" style={{ transition: "1s", position: "absolute", right: "10%", width: "100px", borderRadius: 20, border: "none", backgroundColor: "#B07612", height: "30px", color: "white" }}>התחבר<i style={{ marginLeft: "5px" }} className="fa fa-user"></i></button> */}
      </div>
      <div>
        <nav className="navigation" >
          <div
            className="navigation-menu">
            <ul dir="rtl">
              <li>
                <a href="/">דף הבית</a>
              </li>
              <li>
                <a href="/about">אודות</a>
              </li>
              <li>
                <a href="/blogs">המדריך השלם ליהלומים</a>
              </li>
              <li>
                <a href="/answers">שאלות ותשובות</a>
              </li>
              <li>
                <a href="/contact">עודפים</a>
              </li>
              <li>
                <a href="/trade">טרייד אין</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="wrapi">
        {showIcons && (
          <>
            <a class="social" href="https://wa.me/0523337455">
            <IoLogoWhatsapp className="ico"/>
            </a>
            <a class="social" href="tel:0523337455">
              <AiFillPhone className="ico"/>
            </a>
          </>
        )}
        <a class="soc" onClick={handleXmarkClick}>
          <IoIosCloseCircleOutline className="ico"/>
        </a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="article" element={<Article />} />
          <Route path="about" element={<Accordion />} />
          <Route path="/product/:title" element={<Product />} />
          <Route path="/takanon1" element={<T1 />} />
          <Route path="/takanon2" element={<T2 />} />
          <Route path="/takanon3" element={<T3 />} />
          <Route path="/takanon4" element={<T4 />} />
          <Route path="/takanon5" element={<T5 />} />
          <Route path="/takanon6" element={<T6 />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/vali" element={<MyDropzone />} />
          <Route path="/answers" element={<Qa />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  )
}

export default App;