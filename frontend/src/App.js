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
import Trade from "./pages/trade-in";
import "./comps/style/socialIcons.css";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Icon } from "@material-ui/core";
import HttpsIcon from '@mui/icons-material/Https';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import "./comps/style/footer.css";


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
      <div className="wrapi">
        {showIcons && (
          <>
            <a className="social" href="https://wa.me/0523337455">
              <IoLogoWhatsapp className="ico" />
            </a>
            <a className="social" href="tel:0523337455">
              <AiFillPhone className="ico" />
            </a>
          </>
        )}
        <a className="soc" onClick={handleXmarkClick}>
          <IoIosCloseCircleOutline className="ico" />
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

      {/* <Footer /> */}
      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
        <div className="wr" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="foll">
            <h2 dir="rtl">צריכים עזרה?</h2>
            <div className="meida-clali" dir="rtl">
              <a>
                <p>צור קשר</p>
              </a>
              <a>
                <p>שאלות ותשובות</p>
              </a>
              <a>
                <p>ביטול הזמנה</p>
              </a>
            </div>
          </div>
          <div className="foll">
            <h2 dir="rtl">קטגוריות</h2>
            <div className="meida-clali" dir="rtl">
              <p>צמידים</p>
              <p>תכשיטים עד 1900₪</p>
              <p>טבעות אירוסין</p>
              <p>תליונים</p>
              <p>טבעות מיוחדות</p>
              <p>עגילים</p>
              <p>תכשיטים מיוחדים</p>
            </div>
          </div>
          <div className="foll">
            <h2 dir="rtl">מידע כללי</h2>
            <div className="meida-clali" dir="rtl">
              <a href="/takanon1">
                <p>תנאי שימוש ותקנון</p>
              </a>
              <a href="/takanon2">
                <p>מדיניות פרטיות</p>
              </a>
              <a href="/takanon3">
                <p>משלוחים</p>
              </a>
              <a href="/takanon4">
                <p>ביטול עסקה ודרכי ביטול</p>
              </a>
              <a href="/takanon5">
                <p>הסדרי נגישות</p>
              </a>
              <a href="/takanon6">
                <p>מפת אתר</p>
              </a>
            </div>
          </div>
          <div className="foll">
            <h2 dir="rtl" className="first-sec">מהבורסה</h2>
            <div className="meida-clali" dir="rtl">
              <p>
                מהבורסה הינה חברת היהלומים הראשונה והיחידה עד כה בעולם בתו ויגן פרנדלי היוקרתי – איננו פוגעים בבעלי חיים בדרכי הייצור שלנו, איננו מנסים בבעלי חיים, ואנו חברה 100% ירוקה, אוהבי בעלי חיים? הגעתם למקום הנכון. גם אנחנו.
              </p>
              <button>למידע נוסף עלינו</button>
            </div>
          </div>
        </div>
        <div className="under">
          <div className="follo">
            <h2 dir="rtl" className="followUS">עקבו אחרינו</h2>
            <a href="https://www.instagram.com/mehabursa/" style={{ color: "#fff", marginRight: "1rem" }}>
              <Icon className="icon">
                <i className="fab fa-instagram" />
              </Icon>
            </a>
          </div>
          <div className="mustIcons">
            <Icon style={{ marginRight: '5px' }}>
              <HttpsIcon className="icon" />
            </Icon>
            <FaCcPaypal className="icon" />
            <FaCcVisa className="icon" />
            <FaCcMastercard className="icon" />
            <FaCreditCard className="icon" />
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="botto-cont">
          <p>Copyright © {new Date().getFullYear()} Mehabursa</p>
        </div>
      </footer>
    </div>
  )
}

export default App;