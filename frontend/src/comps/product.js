import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sanityClient from "../client2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./style/product.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Product() {
  const { title } = useParams();
  const [allProductData, setAllProducts] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null); // new state variable for selected color
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product" && title match $title]{
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
        }`,
        { title }
      )
      .then((data) => setAllProducts(data))
      .catch(console.error);
  }, [title]);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (allProductData) {
      const defaultImage = allProductData[0].video ? allProductData[0].video : allProductData[0].poster1;
      setSelectedImage(defaultImage);
    }
  }, [allProductData]);

  const [selectedPoster, setSelectedPoster] = useState(allProductData ? allProductData[0].poster1 : null); const [orderID, setOrderID] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [rotateArrow, setRotateArrow] = useState(false);

  const handleExpandClick = (index) => {
    setIsExpanded(!isExpanded);
    setActiveIndex(index === activeIndex ? null : index);
    setRotateArrow(!rotateArrow);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handlePosterClick = (poster) => {
    setSelectedPoster(poster);
  };


  const videoSrc = allProductData && allProductData[0].video && allProductData[0].video.match(/\.(mp4|webm)$/) ? allProductData[0].video : null;

  return (
    <div className='product' dir='rtl'>
      <h1 className="product-title-mobile">{allProductData && allProductData[0].title}</h1>
      {allProductData && (
        <>
          <div className='stracture-make'>
            <div className='pictur'>
              <div className='big-image'>
                {selectedImage && (
                  selectedImage.match(/\.(mp4|webm|mov)$/) ? (
                    <video controls>
                      <source src={videoSrc} type={`video/${selectedImage.split('.').pop()}`} />
                    </video>
                  ) : (
                    <img src={selectedImage} alt='' />
                  )
                )}
              </div>

              <div className='thumb'>
                <ul>
                  {allProductData.video && videoSrc !== selectedImage && (
                    <li><video className='prodpic' src={allProductData.video} onClick={() => setSelectedImage(allProductData.video)} style={{ opacity: allProductData.video ? 1 : 0 }}></video></li>
                  )}
                  {allProductData &&
                    Object.values(allProductData[0])
                      .filter((value) => typeof value === 'string' && value.match(/\.(jpe?g|png|gif)$/))
                      .map((image, index) => (
                        <img
                          key={index}
                          className={`small-image ${selectedImage === image ? 'active' : ''}`}
                          src={image}
                          alt=''
                          onClick={() => handleImageClick(image)}
                        />
                      ))}
                </ul>
              </div>
            </div>

            <div className='prodcontent'>
              <h1 className="product-title-pc">{allProductData[0].title}</h1>

              <div className='price'>
                {allProductData[0].Price && <p>{allProductData[0].Price}₪</p>}
                <del>{parseInt(allProductData[0].Price) + parseInt(allProductData[0].Price) * 0.25}₪</del>
              </div>
              <div className='tas'>
                {allProductData[0].body && <pre>{allProductData[0].body}</pre>}
                <pre style={{ fontWeight: 500, marginBottom: 4, fontSize: '20px' }}>בחר צבע</pre>
                <div className='color-input'>
                  <button style={{ background: "linear-gradient(70deg, #BF953F, #B38728, #FBF5B7, #AA771C)", border: 'none', width: '40px', height: '40px', borderRadius: '20px', marginRight: 5 }}></button>
                  <button style={{ background: "linear-gradient(70deg, #CC988D, #CC988D, #F0DEDA, #CC988D)", border: 'none', width: '40px', height: '40px', borderRadius: '20px', marginRight: 5 }}></button>
                  <button style={{ background: "linear-gradient(70deg, #929292, #E1E1E1, #fff, #929292)", border: 'none', width: '40px', height: '40px', borderRadius: '20px', marginRight: 5 }}></button>
                </div>
                <div className={`diamond-info ${isExpanded ? 'diamond-info-active' : ''}`}>
                  <h3 onClick={() => handleExpandClick(0)}>
                    {isExpanded ? 'סגור מידע' : 'למידע נוסף'}
                    <span className={`accordion-arrow ${activeIndex === 0 && "accordion-arrow-active"}`}>
                      <KeyboardArrowDownIcon className={rotateArrow ? 'rotate' : ''} />
                    </span>
                  </h3>
                  {isExpanded && (
                    <div className='info'>
                      {<p>סגנון: {allProductData[0].collection}</p>}
                      {<p>צבע: {allProductData[0].color}</p>}
                      {<p>משקל: {allProductData[0].weight}</p>}
                      {<p>ניקוי: {allProductData[0].clean}</p>}
                      {<p>סוג יהלום: {allProductData[0].diamondType}</p>}
                    </div>
                  )}
                </div>


                <PayPalScriptProvider options={{
                  "client-id":
                    "AWMWuqae0yy6S5FSENtPfoTfMWmC8ZwqgWDyRqDyRaEW6P-3Rm0wACoR5Sr5AzQiXRudXF6swtJBQkji",
                  "currency": "ILS"
                }}
                >
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: { value: allProductData[0].Price },
                            description: title, // Add product name as description
                          }
                        ]
                      });
                    }}
                    onApprove={(data, actions) => {
                      // Capture the funds from the transaction
                      return actions.order.capture().then((details) => {
                        // Get the order ID
                        const orderID = details.id;
                        setOrderID(orderID);

                        // Get the product description
                        const description = details.purchase_units[0].description;

                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;