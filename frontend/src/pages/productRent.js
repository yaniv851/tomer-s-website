import React, { useState, useEffect } from 'react';
import sanityClient from "../client2";
import uuid from "uuid";
import { useNavigate, useLocation } from 'react-router-dom';
import "./style/products.css";
import Fade from 'react-reveal/Fade';

function Carder(props) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(title) {
    navigate(`/product/${title}`);
  }

  return (
    <Fade bottom>
      <div style={{ ...styles.card, gridColumn: props.column, gridRow: props.row }} className="cards" onClick={() => handleClick(props.title)}>
        <img src={props.poster1} alt={props.alt} />
        <p>{props.title}</p>
        <div className='cate-content'>
          <button className='cardbtn'>קנה עכשיו</button>
          <p className='price' style={styles.price}>{props.price}₪</p>
        </div>
      </div>
    </Fade>
  );
}

function CardContain() {
  const [index, setIndex] = useState(0);
  const [allProductData, setAllProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const [sentTitles, setSentTitles] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          title,
          body,
          video,
          poster1,
          poster2,
          poster3,
          poster4,
          poster5,
          poster6,
          post1,
          post2,
          post3,
          post4,
          post5,
          post6,
          collection,
          weight,
          color,
          clean,
          diamondType,
          Price,
          row,
          column,
        } | order(row asc, column asc)`
      )
      .then((data) => {
        setAllProducts(data);
        setSentTitles(data.map(product => product.title)); // update sentTitles with the new data
      })
      .catch(console.error);
  }, []);
  // const images = [
  //   { source: "/images/earing.jpeg", title: "עגילי חן", desc: "greajkbasfjbasjfbas", price: "10" },
  //   { source: "/images/earing.jpeg", title: "יהלומי טניס", desc: "kasfkasf", price: "20" },
  //   { source: "/images/earing.jpeg", title: "יהלום גדול", desc: "nassafnnasf", price: "30" },
  //   { source: "/images/earing.jpeg", title: "שרשרת בית", desc: "ajsfjafnn", price: "40" },
  //   { source: "/images/earing.jpeg", title: "צמיד לנעל", desc: "ansfnaf", price: "50" }
  // ];


  // const handleNext = () => {
  //   setIndex(index + 3 >= images.length ? 0 : index + 3);
  // };

  // const handlePrev = () => {
  //   setIndex(index - 3 < 0 ? images.length - 3 : index - 3);
  // };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // create an array of rows based on the maximum row number in the products
  const maxRow = allProductData ? Math.max(...allProductData.map(product => product.row)) : 0;
  const rows = Array.from(Array(maxRow), (_, index) => index + 1);
  const maxColumns = 3;
  const column = allProductData && allProductData.map(product => product.column);
  console.log(column);

  return (
    <div className='column' style={{ marginBottom: '30px' }}>
      <h1 dir='rtl' style={{ fontWeight: 400, textAlign: "center" }}>הנמכרים ביותר:</h1>
      {rows.map(row => (
        <div key={row} className='row' dir="rtl" style={{ textAlign: "center" }}>
          <div style={styles.cardContainer} className="cardContainer" dir="ltr">
            {allProductData &&
              allProductData
                .map((product, index) => (
                  <Carder
                    key={index}
                    video={product.video}
                    poster1={product.poster1}
                    poster2={product.poster2}
                    poster3={product.poster3}
                    poster4={product.poster4}
                    poster5={product.poster5}
                    poster6={product.poster6}
                    alt={product.poster1}
                    title={product.title}
                    body={product.body}
                    collection={product.collection}
                    weight={product.weight}
                    clean={product.clean}
                    diamondType={product.diamondType}
                    color={product.color}
                    price={`${product.Price}`}
                    column={product.column} // assign a column number only if it exists
                    row={product.row}
                  />
                ))
            }
          </div>
        </div>
      ))}
    </div>
  );
}



const styles = {
  cardContainer: {
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  price: {
    fontWeight: 500,
    alignItems: "flex-start",
  },
};

export default CardContain;
