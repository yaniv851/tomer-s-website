import React, { useState, useEffect } from 'react';
import sanityClient from "../client2";
import { useNavigate } from 'react-router-dom';
import "./style/products.css";
import Fade from 'react-reveal/Fade';

function Card(props) {
  const navigate = useNavigate();

  function handleClick(poster1, poster2, poster3, poster4, poster5, poster6, title, body, video, price, collection, color,weight,clean,diamondType) {
    navigate(`/product`, { state: { poster1, poster2, poster3, poster4, poster5, poster6, title, body, video, price, collection, color, weight, clean, diamondType } });
  };

  return (
    <Fade bottom>
      <div style={styles.card} className="cards" onClick={() => handleClick(props.poster1, props.poster2, props.poster3, props.poster4, props.poster5, props.poster6, props.title, props.body, props.video, props.price, props.collection, props.color, props.clean, props.weight, props.diamondType)}>
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

function CardContainer() {
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
          collection,
          weight,
          color,
          clean,
          diamondType,
          Price,
        }`
      )
      .then((data) => setAllProducts(data))
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
  return (
    <div className='column'>
      <div className='row' style={{ textAlign: "center" }} dir="rtl">
        <h1 style={{ fontWeight: 400 }}>הנמכרים ביותר:</h1>
        <div style={styles.cardContainer} className="cardContainer" dir="ltr">
          {allProductData &&
            allProductData.map((product, index) => (
              <Card
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
              />
            ))
          }
        </div>
      </div>
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

export default CardContainer;
