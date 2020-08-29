import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import { getAllProducts } from "../../redux/actions/product";
import { useState } from "react";

const Products = ({ product: { products, loading }, getAllProducts }) => {
  const [formData, setFormData] = useState({
    skip: 0,
    limit: 3,
  });

  const { skip, limit } = formData;

  const loadMore = () => {
    let skep = skip + limit;
    setFormData({ ...formData, skip: skep });
    console.log(formData);
    getAllProducts({ skip: skep, limit: limit });
  };

  useEffect(() => {
    getAllProducts(formData);
  }, []);
  return loading ? (
    <Fragment>Products loading....</Fragment>
  ) : (
    <Fragment>
      <div className="products-flex-row">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>

      <button onClick={(e) => loadMore()} className="btn">
        Load more
      </button>
    </Fragment>
  );
};

Products.propTypes = {};
const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps, { getAllProducts })(Products);
