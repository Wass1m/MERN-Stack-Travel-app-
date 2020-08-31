import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ProductImage from "./Sections/ProductImage";
import { connect } from "react-redux";
import { getProductById } from "../../redux/actions/product";
import { addToCart } from "../../redux/actions/cart";
// import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const ProductPage = ({
  match,
  getProductById,
  addToCart,
  product: { product, loading },
}) => {
  useEffect(() => {
    getProductById(match.params.id);
  }, []);

  return loading ? (
    <Fragment>Waiting....</Fragment>
  ) : product === null ? (
    <Fragment>Waiting....</Fragment>
  ) : (
    <div className="product-page">
      <h1>{product.title}</h1>
      <div className="flex-row">
        <div className="slider">
          <ProductImage product={product} />
        </div>
        <div className="product-info">
          <h3>Product info</h3>
          <div className="product-info-table">
            <table>
              <thead>
                <tr>
                  <th>Price : {product.price}</th>
                  <th>Sold : {product.sold}</th>
                  <th>View : {product.views}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="3">
                    Description: <br /> <br /> {product.description}
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => addToCart(product)} className="btn primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProductById, addToCart })(
  ProductPage
);
