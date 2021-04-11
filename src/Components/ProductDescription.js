import React from "react";
import "../Styles/ProductDescription.css";
import ProductDescHeader from "./ProductDescHeader";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Data from "../products.json";
import Services from "./Services";
import Footer from "./Footer";
import RelatedProducts from "./RelatedProducts";

console.log(Data[1]);

function ProductDescription() {
  return (
    <div className="productDescription">
      <ProductDescHeader />
      <div className="productDescription_tag">
        <NavigateBeforeIcon />
        <h3>Furniture</h3>
      </div>
      <div className="productDescription_container">
        <div className="productDescription_attrib">
          <img src={Data[1].image} alt={Data[1].title} />

          <div className="productDescription_info">
            <h3>{Data[1].title}</h3>
            <p>{Data[1].description}</p>
            <div className="productDescription_price">
              <h2>{Data[1].price}</h2>
              <span>{Data[1].percentOff}</span>
            </div>
            <h4>{Data[1].oldPrice}</h4>
            <div className="productDescriptiopn_count">
              <p>-</p>
              <span>1</span>
              <p>+</p>
            </div>
            <div className="productDescription_button">
              <button className="productDescription_button1">Add to bag</button>
              <button className="productDescription_button2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
      <Services />
      <Footer />
    </div>
  );
}

export default ProductDescription;
