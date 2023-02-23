import { React } from "react";
import "./styles/Homepage.css";
import Slider from "../comps/homeSlider";
import Why from "../comps/whyus";
import CardContainer from "../comps/categories";
import Card from "../comps/products";
// Import the Commerce module
import Commerce from "@chec/commerce.js";

const commerce = new Commerce('pk_50135ae615f81b593f9a6decee34607f3b359676e7d4e');

function Home() {
  return (
    <div>
      <div>
        <Slider />
        <Why />
        <CardContainer />
        <Card />
      </div>
    </div>
  )
}


export default Home;