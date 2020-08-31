import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import {
  getAllProducts,
  clearProducts,
  filterProducts,
} from "../../redux/actions/product";
import { useState } from "react";
import ContinentFilter from "../Filters/ContinentFilter";
import PriceFilter from "../Filters/PriceFilter";
import { prices } from "../Filters/Data";
import SearchFilter from "../Filters/SearchFilter";
import Spinner from "../../assets/spinner.svg";

const Products = ({
  product: { products, loading },
  getAllProducts,
  clearProducts,
  filterProducts,
}) => {
  const [formData, setFormData] = useState({
    skip: 0,
    limit: 8,
    filtersState: {
      continents: [],
      price: [],
    },
    searchTerm: "",
  });

  const { skip, limit, filtersState, searchTerm } = formData;

  // to load more products, current limit (state limit : 8)

  const loadMore = () => {
    let skep = skip + limit;
    setFormData({ ...formData, skip: skep });
    console.log(formData);
    getAllProducts({ skip: skep, limit: limit });
  };

  // filter handling calling redux call

  const handleFilterResult = (filters) => {
    const variables = {
      skip: 0,
      limit: limit,
      filters: filters,
    };
    filterProducts(variables);
    setFormData({ ...formData, skip: 0 });
  };

  // filter returning price array

  const handlePrice = (value) => {
    const data = prices; // receive all prices data
    let array = [];
    for (let key in data) {
      if (data[key]._id === value) array = data[key].array;
    }
    console.log(array);
    return array;
  };

  // filter returning filters object to pass to results

  const handleFilters = (filters, category) => {
    const newFilters = {
      ...filtersState,
    };

    console.log(category);

    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    console.log(newFilters);

    handleFilterResult(newFilters);

    setFormData({ ...formData, filtersState: newFilters });
  };

  // search filter

  const handleSearch = (term) => {
    const variables = {
      skip: 0,
      limit: limit,
      filters: filtersState,
      searchTerm: term,
    };

    setFormData({ ...formData, skip: 0, searchTerm: term });
    filterProducts(variables);
    console.log(term);
  };

  useEffect(() => {
    clearProducts();
    getAllProducts(formData);
  }, []);
  return (
    <Fragment>
      <div className="filters">
        <ContinentFilter handle={handleFilters} />
        <PriceFilter handle={handleFilters} />
      </div>
      <SearchFilter handleSearch={handleSearch} />
      {loading || products.length === 0 ? (
        <Fragment>
          <img src={Spinner} alt="" />
        </Fragment>
      ) : (
        <div className="products-flex-row">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
      )}
      {products.length >= 8 ? (
        <button onClick={(e) => loadMore()} className="btn">
          Load more
        </button>
      ) : null}
    </Fragment>
  );
};

Products.propTypes = {};
const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps, {
  filterProducts,
  getAllProducts,
  clearProducts,
})(Products);
