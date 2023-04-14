import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import sanityClient from "../client2";
import Fade from 'react-reveal/Fade';


function Card(props) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleClick(title) {
        navigate(`/product/${title}`);
    }


    if (props.categoryName == "עגילים")
        if (props.title && props.title.includes("עגילי") ||
            props.collection && props.collection.includes("עגילי")) {
            return (
                <Fade bottom>
                    <div style={styles.card} className="cards" onClick={() => handleClick(props.title)}>
                        <img src={props.poster1} alt={props.alt} />
                        <p>{props.title}</p>
                        <div className='cate-content'>
                            <button className='cardbtn'>קנה עכשיו</button>
                            <p className='price' style={styles.price}>{props.price}₪</p>
                        </div>
                    </div>
                </Fade>
            )
        }

    if (props.categoryName == "צמידים")
        if (props.title && props.title.includes("צמיד") ||
            props.collection && props.collection.includes("צמיד")) {
            return (
                <Fade bottom>
                    <div style={styles.card} className="cards" onClick={() => handleClick(props.title)}>
                        <img src={props.poster1} alt={props.alt} />
                        <p>{props.title}</p>
                        <div className='cate-content'>
                            <button className='cardbtn'>קנה עכשיו</button>
                            <p className='price' style={styles.price}>{props.price}₪</p>
                        </div>
                    </div>
                </Fade>
            )
        }
    if (props.categoryName == "תכשיטים עד 1900₪")
        if (props.price && props.price < 1900) {
            return (
                <Fade bottom>
                    <div style={styles.card} className="cards" onClick={() => handleClick(props.title)}>
                        <img src={props.poster1} alt={props.alt} />
                        <p>{props.title}</p>
                        <div className='cate-content'>
                            <button className='cardbtn'>קנה עכשיו</button>
                            <p className='price' style={styles.price}>{props.price}₪</p>
                        </div>
                    </div>
                </Fade>
            )
        }
    // if (props.categoryName == "צמידים")
    //     if (props.title && props.title.includes("צמיד") ||
    //         props.collection && props.collection.includes("צמיד")) {
    //         return (
    //             <Fade bottom>
    //                 <div style={styles.card} className="cards" onClick={() => handleClick(props.title)}>
    //                     <img src={props.poster1} alt={props.alt} />
    //                     <p>{props.title}</p>
    //                     <div className='cate-content'>
    //                         <button className='cardbtn'>קנה עכשיו</button>
    //                         <p className='price' style={styles.price}>{props.price}₪</p>
    //                     </div>
    //                 </div>
    //             </Fade>
    //         )
    //     }
    // if (props.categoryName == "צמידים")
    //     if (props.title && props.title.includes("צמיד") ||
    //         props.collection && props.collection.includes("צמיד")) {
    //         return (
    //             <Fade bottom>
    //                 <div style={styles.card} className="cards" onClick={() => handleClick(props.title)}>
    //                     <img src={props.poster1} alt={props.alt} />
    //                     <p>{props.title}</p>
    //                     <div className='cate-content'>
    //                         <button className='cardbtn'>קנה עכשיו</button>
    //                         <p className='price' style={styles.price}>{props.price}₪</p>
    //                     </div>
    //                 </div>
    //             </Fade>
    //         )
    // }
}

export default function Cate() {
    const { categoryName } = useParams();
    const [allProductData, setAllProducts] = useState(null);

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
            .then((data) =>
                setAllProducts(data))
            .catch(console.error);
    }, []);

    if (!categoryName) {
        return (
            <div>
                <p>No category selected</p>
            </div>
        )
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{categoryName}</h1>

            {allProductData &&
                allProductData
                    .map((product, index) => (
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
                            categoryName={categoryName}
                        />
                    ))
            }
        </div>
    )
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