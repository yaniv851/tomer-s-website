import React, { useState } from "react";
import "./styles/qa-an.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div className="accordion">
      <h1>
        שאלות ותשובות
      </h1>
      <div
        className={`accordion-item ${activeIndex === 0 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(0)}>
          Question #1
          <span className={`accordion-arrow ${activeIndex === 0 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className="accordion-item-content">
          This is the first item's accordion body.
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 1 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(1)}>
          Question #2
          <span className={`accordion-arrow ${activeIndex === 1 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          This is the second item's accordion body.
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 2 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(2)}>
          Question #3
          <span className={`accordion-arrow ${activeIndex === 2 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          This is the third item's accordion body.
        </div>
      </div>
    </div>
  );
}
