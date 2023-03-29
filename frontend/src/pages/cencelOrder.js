import React from "react";
import "./styles/cencelOrder.css";

export default function Cencel() {
    return (
        <div dir="rtl" className="wrapwra" style={{ marginRight: '10%' }}>
            <div className="realhead">
                <h1>בקשה לביטול עסקה</h1>
            </div>
            <div className="contentwrap">
                <form className="cencelForm" >
                    <input type={"text"} placeholder='שם מלא'></input>
                    <input type={"email"} placeholder='דואר אלקטרוני'></input>
                    <input type={"tel"} placeholder='טלפון'></input>
                    <input type={"text"} placeholder='מספר עסקה'></input>
                    <input type={"text"} placeholder='תוכן ההודעה' className='messegeinp'></input>
                    <input type={"submit"}></input>
                </form>
                <div className="more">
                    <h3>ניתן לבטל את ההזמנה גם בדרכים הבאות:</h3>
                    <p>מייל: <a href="mailto:mehabursaleyaalomim@gmail.com">mehabursaleyaalomim@gmail.com</a></p>
                    <p>טלפון: <a href="tel:0543337455">0523337455</a></p>
                    <span style={{fontWeight: '800'}}>מעבדת שירות ארצית שוכנת ברחוב דרך העצמאות 48 יהוד.</span>
                </div>
            </div>
        </div>
    )
}