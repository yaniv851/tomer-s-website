import React, { useState, useEffect } from "react";
import "./style/homeSlider.css";
import sanityClient from "../client2";




export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [allHeaders, setAllHeaders] = useState(null);

  const handleLeftArrowClick = () => {
    if (currentImage === 0) {
      setCurrentImage(allHeaders.length - 1);
      setCurrentText(allHeaders.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
      setCurrentText(currentText - 1);
    }
  };


  const handleRightArrowClick = () => {
    if (
      currentImage === allHeaders.length - 1 &&
      currentText === allHeaders.length - 1
    ) {
      setCurrentImage(0);
      setCurrentText(0);
    } else {
      setCurrentImage(currentImage + 1);
      setCurrentText(currentText + 1);
    }
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "header"]{
        ProductName,
        post1 {
          asset-> {
            url
          }
        },
        body,
      }`
      )
      .then((data) => {
        const newImages = data.map((header) => ({
          source: header.post1.asset.url,
          productTitle: header.ProductName,
          body: header.body,
        }));
        setAllHeaders(newImages);
      })
      .catch(console.error);
  }, []);



  return (
    <div className="slider-container">
      <div
        className="arrow-container left-arrow"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={handleLeftArrowClick}
      >
        <i className="fa fa-chevron-left"></i>
      </div>
      {allHeaders && (
        <img className="ifsa" src={allHeaders[currentImage].source} />
      )}
      {allHeaders && (
        <div dir="rtl" className="content" style={{ marginRight: "150px" }}>
          <h2>{allHeaders[currentText].productTitle}</h2>
          <p className="banne">{allHeaders[currentText].body}</p>
          <button className="btn-log hover-white">קנה עכשיו</button>
        </div>
      )}
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
