import React, { useState } from "react";
import "./style/homeSlider.css";


const images = [
  {source: "/images/nineteenhundred.jpeg", productTitle: "product 1"},
  {source: "/images/earing.jpeg", productTitle: "product 2"},
  {source: "/images/specear.jpeg", productTitle: "product 3"},
];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const handleLeftArrowClick = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
      setCurrentText(images.length - 1)
    } else {
      setCurrentImage(currentImage - 1);
      setCurrentText(currentText - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentImage === images.length - 1 & currentText===images.length-1) {
      setCurrentImage(0);
      setCurrentText(0);
    }
    else {
      setCurrentImage(currentImage + 1);
      setCurrentText(currentText + 1);
    }
  };

  return (
    <div className="slider-container">
      <div
        className="arrow-container left-arrow"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={handleLeftArrowClick}
      >
        <i className="fa fa-chevron-left"></i>
      </div>
      <img className="ifsa" src={images[currentImage].source}/>      <div dir="rtl" className="content" style={{ marginRight: "150px" }}>
        <h2>{images[currentText].productTitle}</h2>
        <p className="banne">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod{" "}
        </p>
        <button className="btn-log hover-white">קנה עכשיו</button>
      </div>
      <div
        className="arrow-container right-arrow"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={handleRightArrowClick}
      >
        <i style={{ justifyContent: "center" }} className="fa fa-chevron-right">
        </i>
      </div>
    </div>
  );
}
