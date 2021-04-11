import React from "react";
import "../Styles/Product.css";
import ProductData from "../products.json";
import { useHistory } from "react-router-dom";

console.log(ProductData[0].id);

function Product() {
  const history = useHistory();

  // push to home
  const goToProductPage = () => {
    history.push("/productPage");
  };
  return (
    <div className="product">
      {ProductData.map((products) => {
        return (
          <>
            <div
              key={products.id}
              className="product_container"
              onClick={goToProductPage}
            >
              <div className="product_image">
                <img src={products.image} alt={products.title} />
                <span>{products.percentOff}</span>
              </div>
              <div className="product_attrib">
                <h3>{products.title}</h3>
                <h4>{products.price}</h4>
                <p>{products.oldPrice}</p>
              </div>
            </div>
            <div className="product_add">
              <button>+ Add</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Product;
