import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const SingleProduct = ({ product }) => {
  return (
    <div className="single-product">
      <div className="image-slider">
        <img src={`http://localhost:5000/${product.images[0]}`} alt="" />
      </div>
      <div className="content">
        <h1>{product.title}</h1>
        <h3>{product.price} $</h3>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {};

export default SingleProduct;

{
  /* <div className="single-product">
<div className="image-slider">
  <Carousel>
    {product.images.map((image, index) => (
      <Item key={index}>
        <img src={`http://localhost:5000/${image}`} alt="" />
      </Item>
    ))}
  </Carousel>
</div>
<div className="content">
  <h1>{product.title}</h1>
  <h3>{product.price} $</h3>
</div>
</div> */
}
