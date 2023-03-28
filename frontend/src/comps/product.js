import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sanityClient from "../client2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./style/product.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Product() {
  const { title } = useParams();
  const [popupVisible, setPopupVisible] = useState(false);
  const [allProductData, setAllProducts] = useState(null);
  const [selectedColor, setSelectedColor] = useState('זהב לבן'); // new state variable for selected color
  const [selectedMeasure, setSelectedMeasure] = useState(null);
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

  function togglePopup() {
    setPopupVisible(!popupVisible);
  }


  const videoSrc = allProductData && allProductData[0].video && allProductData[0].video.match(/\.(mp4|webm)$/) ? allProductData[0].video : null;

  // Check if title contains the word 'טבעת' and if collection contains the word 'טבעות'
  const showMeasureButton = allProductData && (/(טבעת)/.test(allProductData[0].title) || /(טבעות)/.test(allProductData[0].collection));

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
                  <button title="זהב" style={{ background: "linear-gradient(70deg, #BF953F, #B38728, #FBF5B7, #AA771C)", border: selectedColor === "זהב" ? '1.5px solid #454343' : '1.5px solid #f0f0f0', width: '40px', height: '40px', borderRadius: '20px', marginRight: 5 }}
                    onClick={() => setSelectedColor("זהב")}
                  >
                  </button>
                  <button title="זהב ורוד" style={{ background: "linear-gradient(70deg, #CC988D, #CC988D, #F0DEDA, #CC988D)", border: selectedColor === "זהב ורוד" ? '1.5px solid #454343' : '1.5px solid #f0f0f0', width: '40px', height: '40px', borderRadius: '20px', marginRight: 5 }}
                    onClick={() => setSelectedColor("זהב ורוד")}
                  ></button>
                  <button title="זהב לבן" style={{ background: "linear-gradient(70deg, #929292, #E1E1E1, #fff, #929292)", border: selectedColor === "זהב לבן" ? '1.5px solid #454343' : '1.5px solid #f0f0f0', width: '40px', height: '40px', borderRadius: '20px', marginRight: 5 }}
                    onClick={() => setSelectedColor("זהב לבן")}
                  >
                  </button>
                </div>
                {showMeasureButton && <button className='measurebtn' style={{ marginTop: 10, padding: 5 }} onClick={togglePopup}>בחר מידה</button>}
                {popupVisible &&
                  <div className="popup" dir='rtl'>
                    <h2>מידות</h2>
                    <div className='measuresbtns' dir='ltr'>
                      <button>38EU/0.5US</button>
                      <button>39EU/1US</button>
                      <button>40EU/1.5US</button>
                      <button>42EU/2US</button>
                      <button>43EU/2.5US</button>
                      <button>44EU/3US</button>
                      <button>45EU/3.5US</button>
                      <button>47EU/4US</button>
                      <button>48EU/4.5US</button>
                      <button>49EU/5US</button>
                      <button>50EU/5.5US</button>
                      <button>51EU/6US</button>
                      <button>52EU/6.5US</button>
                      <button>54EU/7US</button>
                      <button>55EU/7.5US</button>
                      <button>56EU/8US</button>
                      <button>58EU/8.5US</button>
                      <button>59EU/9US</button>
                      <button>60EU/9.5US</button>
                      <button>61EU/10US</button>
                      <button>63EU/10.5US</button>
                      <button>64EU/11US</button>
                      <button>65EU/11.5US</button>
                      <button>67EU/12US</button>
                      <button>68EU/12.5US</button>
                      <button>69EU/13US</button>
                    </div>
                  </div>}
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