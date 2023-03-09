import React from "react";
import "./style/footer.css";
import { Icon } from "@material-ui/core";
import HttpsIcon from '@mui/icons-material/Https';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';

function Footer() {
  return (
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
          <Icon style={{marginRight: '5px'}}>
            <HttpsIcon className="icon"/>
          </Icon>
          <FaCcPaypal className="icon"/>
          <FaCcVisa className="icon"/>
          <FaCcMastercard className="icon"/>
          <FaCreditCard className="icon"/>
        </div>
      </div>
      <hr style={{ width: "100%" }} />
      <div className="botto-cont">
        <p>Copyright © {new Date().getFullYear()} Mehabursa</p>
      </div>
    </footer>
  );
}

export default Footer;
