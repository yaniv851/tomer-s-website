import React from "react";
import "./style/us.css";
import Categories from "./whyCard";

export default function why(){
    return (
        <div style={{textAlign: "center"}} dir="rtl">
            <img src="/images/Diamond.png" style={{width:"100px", position: "absolute", left: "50px", transform: "rotate(320deg)"}} />
            <h3 style={{color: "#5F560B", position: 'relative'}}>השירות הטוב ביותר במדינה</h3>
            <h1 className="whyUS" style={{fontWeight: "400"}}>למה לבחור בנו?</h1>
            <br/>
            <Categories/>
        </div>
    )
}