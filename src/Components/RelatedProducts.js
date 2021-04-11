import React from "react";
import "../Styles/RelatedProducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../products.json";
import { TrendingUpRounded } from "@material-ui/icons";

function RelatedProducts() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relatedProducts">
      <div className="imageSlider">
        <h3>Related products</h3>
        <Slider {...settings}>
          {Data.map((products) => {
            return (
              <div className="card-wrapper">
                <div className="card">
                  <div className="card-image">
                    <img src={products.image} alt={products.title} />
                    <span>{products.percentOff}</span>
                  </div>
                </div>
                <p>{products.title}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default RelatedProducts;
