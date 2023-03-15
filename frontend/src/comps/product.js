import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sanityClient from "../client2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./style/product.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Product() {
  const { title } = useParams();
  const [allProductData, setAllProducts] = useState(null);
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


  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const title = queryParams.get('title');
  // const body = queryParams.get('body');
  // const video = queryParams.get('video') !== 'null' ? queryParams.get('video') : null;
  // const poster1 = queryParams.get('poster1') !== 'null' ? queryParams.get('poster1') : null;
  // const poster2 = queryParams.get('poster2') !== 'null' ? queryParams.get('poster2') : null;
  // const poster3 = queryParams.get('poster3') !== 'null' ? queryParams.get('poster3') : null;
  // const poster4 = queryParams.get('poster4') !== 'null' ? queryParams.get('poster4') : null;
  // const poster5 = queryParams.get('poster5') !== 'null' ? queryParams.get('poster5') : null;
  // const poster6 = queryParams.get('poster6') !== 'null' ? queryParams.get('poster6') : null;
  // const price = queryParams.get('price') !== 'null' ? queryParams.get('price') : null;
  // const collection = queryParams.get('collection') !== 'null' ? queryParams.get('collection') : null;
  // const color = queryParams.get('color') !== 'null' ? queryParams.get('color') : null;
  // const weight = queryParams.get('weight') !== 'null' ? queryParams.get('weight') : null;
  // const clean = queryParams.get('clean') !== 'null' ? queryParams.get('clean') : null;
  // const diamondType = queryParams.get('diamondType') !== 'null' ? queryParams.get('diamondType') : null;

  // const poster1 = location.state ? location.state.poster1 : null;
  // const poster2 = location.state ? location.state.poster2 : null;
  // const poster3 = location.state ? location.state.poster3 : null;
  // const poster4 = location.state ? location.state.poster4 : null;
  // const poster5 = location.state ? location.state.poster5 : null;
  // const poster6 = location.state ? location.state.poster6 : null;
  // const title = location.state ? location.state.title : null;
  // const body = location.state ? location.state.body : null;
  // const video = location.state ? location.state.video : null;
  // const price = location.state ? location.state.price : null;
  // const collection = location.state ? location.state.collection : null;
  // const color = location.state ? location.state.color : null;
  // const weight = location.state ? location.state.weight : null;
  // const clean = location.state ? location.state.clean : null;
  // const diamondType = location.state ? location.state.diamondType : null;


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
                {/* {body && <pre>{body}</pre>} */}
                <div className={`diamond-info ${isExpanded ? 'diamond-info-active' : ''}`}>
                  <h3 onClick={() => handleExpandClick(0)}>
                    {isExpanded ? 'סגור מידע' : 'למידע נוסף'}
                    <span className={`accordion-arrow ${activeIndex === 0 && "accordion-arrow-active"} ${rotateArrow && "rotate"}`}>
                      <KeyboardArrowDownIcon />
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