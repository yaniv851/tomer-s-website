import React from "react"
import "../comps/style/homeSlider.css";

const Article = (props) => {
  return (
    <div style={{backgroundColor: 'white', padding: '20px', boxShadow: '1px 1px 5px grey'}}>
      <h1 style={{color: '#3f51b5'}}>{props.title}</h1>
      <p style={{fontSize: '16px'}}>{props.description}</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <p style={{fontSize: '14px'}}>Author: {props.author}</p>
          <p style={{fontSize: '14px'}}>Date: {props.date}</p>
        </div>
      </div>
      <a href={props.url} style={{color: '#3f51b5', fontSize: '14px'}}>Read More</a>
    </div>
  );
}

export default Article;
