import React from "react";
import "./style/us.css";
import Zoom from 'react-reveal/Zoom';

export default function categories() {
    return (
        <div className="cards-container">
            <Zoom>
                <div className="card">
                    <div className="card-content">
                        {/* style= "max-width:50%; height:auto;" */}
                        <img className="cardme" src="/images/atm-card.png" />
                        <p className="card-text">תשלום מאובטח</p>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="card">
                    <div className="card-content">
                        <img className="cardme" src="/images/money.png" />
                        <p dir="rtl" className="card-text">זול יותר!</p>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="card">
                    <div className="card-content">
                        <img className="cardme" src="/images/jewelry.png" />
                        <p dir="rtl" className="card-text">כל סוגי התכשיטים</p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}