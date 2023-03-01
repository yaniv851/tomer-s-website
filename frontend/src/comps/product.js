import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./style/product.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Product() {
  const location = useLocation();
  const poster1 = location.state ? location.state.poster1 : null;
  const poster2 = location.state ? location.state.poster2 : null;
  const poster3 = location.state ? location.state.poster3 : null;
  const poster4 = location.state ? location.state.poster4 : null;
  const poster5 = location.state ? location.state.poster5 : null;
  const poster6 = location.state ? location.state.poster6 : null;
  const title = location.state ? location.state.title : null;
  const body = location.state ? location.state.body : null;
  const video = location.state ? location.state.video : null;
  const price = location.state ? location.state.price : null;
  const collection = location.state ? location.state.collection : null;
  const color = location.state ? location.state.color : null;
  const weight = location.state ? location.state.weight : null;
  const clean = location.state ? location.state.clean : null;
  const diamondType = location.state ? location.state.diamondType : null;


  const [selectedImage, setSelectedImage] = useState(video);
  const [orderID, setOrderID] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [rotateArrow, setRotateArrow] = useState(false);

  const handleExpandClick = (index) => {
    setIsExpanded(!isExpanded);
    setActiveIndex(index === activeIndex ? null : index);
    setRotateArrow(!rotateArrow);
  };

  return (
    <div className='product' dir='rtl'>
      <div className='stracture-make'>
        <div className='pictur'>
          <div className='big-image'>
            {selectedImage && selectedImage.match(/\.(mp4|webm)$/) ?
              <video controls className='prodpic' src={selectedImage} alt={selectedImage} /> :
              <img className='prodpic' src={selectedImage ? selectedImage : poster1} alt={selectedImage ? selectedImage : poster1} />
            }
          </div>

          <div className='thumb'>
            <ul>
              <li><video className='prodpic' src={video} onClick={() => setSelectedImage(video)}></video></li>
              {poster1 && <li><img className='prodpic' src={poster1} alt={poster1} onClick={() => setSelectedImage(poster1)} /></li>}
              {poster2 && <li><img className='prodpic' src={poster2} alt={poster2} onClick={() => setSelectedImage(poster2)} /></li>}
              {poster3 && <li><img className='prodpic' src={poster3} alt={poster3} onClick={() => setSelectedImage(poster3)} /></li>}
              {poster4 && <li><img className='prodpic' src={poster4} alt={poster4} onClick={() => setSelectedImage(poster4)} /></li>}
              {poster5 && <li><img className='prodpic' src={poster5} alt={poster5} onClick={() => setSelectedImage(poster5)} /></li>}
              {poster6 && <li><img className='prodpic' src={poster6} alt={poster6} onClick={() => setSelectedImage(poster6)} /></li>}
            </ul>
          </div>
        </div>

        <div className='prodcontent'>
          {title && <h1>{title}</h1>}
          <div className='price'>
            {price && <p>{price}₪</p>}
            <del>{parseInt(price) + parseInt(price) * 0.25}₪</del>
          </div>
          {body && <pre>{body}</pre>}
          <div className={`diamond-info ${isExpanded ? 'diamond-info-active' : ''}`}>
            <h3 onClick={() => handleExpandClick(0)}>
              {isExpanded ? 'סגור מידע' : 'למידע נוסף'}
              <span className={`accordion-arrow ${activeIndex === 0 && "accordion-arrow-active"} ${rotateArrow && "rotate"}`}>
                <KeyboardArrowDownIcon />
              </span>
            </h3>
            {isExpanded && (
              <div className='info'>
                {<p>סגנון: {collection}</p>}
                {<p>צבע: {color}</p>}
                {<p>משקל: {weight}</p>}
                {<p>ניקוי: {clean}</p>}
                {<p>סוג יהלום: {diamondType}</p>}
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
                      amount: { value: price },
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
  );
}

export default Product;