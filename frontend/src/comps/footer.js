import React from "react";
import "./style/footer.css";
import { Icon } from "@material-ui/core";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="foll">
          <h2 dir="rtl" className="followUS">עקבו אחרינו:</h2>
          <div className="footcont">
          <a href="#" style={{ color: "#fff", marginRight: "1rem" }}>
            <Icon className="icon">
              <i className="fab fa-facebook-f" />
            </Icon>
          </a>
          <a href="#" style={{ color: "#fff", marginRight: "1rem" }}>
            <Icon className="icon">
              <i className="fab fa-twitter" /> 
            </Icon> 
          </a>
          <a href="#" style={{ color: "#fff", marginRight: "1rem" }}>
            <Icon className="icon">
              <i className="fab fa-instagram" />
            </Icon>
          </a>
          </div>
        </div>
        <div className="foll">
          <h2 dir="rtl" className="followUS">מידע כללי</h2>
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
      </div>
      <hr style={{width: "100%"}}/>
      <div className="botto-cont">
      <p>Copyright © {new Date().getFullYear()} Mehabursa</p>
      <div className="secure-icons">
      <i className="fas fa-lock ssl-icon"></i>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
