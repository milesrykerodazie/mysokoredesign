import React from "react";
import "../Styles/Products.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Product from "./Product";

function Products() {
  return (
    <div className="products">
      <div className="products_search">
        <input placeholder="Search for products..." type="text" />
        <SearchOutlinedIcon className="products_searchIcon" />
      </div>
      <div className="products_header">
        <h3>Electronics</h3>
        <p>12</p>
      </div>
      <div className="products_list">
        <Product />
      </div>
    </div>
  );
}

export default Products;
