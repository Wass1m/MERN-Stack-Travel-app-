import React, { useState } from "react";
import PropTypes from "prop-types";
import { Continents } from "./const";
import Upload from "../Utils/Upload";
import { connect } from "react-redux";
import { uploadProduct } from "../../redux/actions/product";

const UploadProducts = ({ uploadProduct, auth, product: { images } }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    continent: "Select",
  });

  const { title, description, price, continent } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let formFinal = {
      ...formData,
      writer: auth.user._id,
      images,
    };

    uploadProduct(formFinal);
  };

  return (
    <div className="upload-product">
      <div className="form-section">
        <h1>Upload a new product</h1>

        <form onSubmit={(e) => onSubmit(e)}>
          {/* {drop zone} */}
          <Upload />
          <div className="form-group">
            <label>Title</label>
            <input
              onChange={(e) => onChange(e)}
              name="title"
              type="text"
              value={title}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="4"
              cols="50"
              type="text"
              value={description}
              placeholder="description"
              name="description"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              value={price}
              placeholder="Price"
              name="price"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Continent</label>
            <select
              name="continent"
              value={continent}
              onChange={(e) => onChange(e)}
            >
              <option>Select</option>
              {Continents.map((continent) => (
                <option key={continent.key}>{continent.value}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

UploadProducts.propTypes = {};

const mapStateToProps = (state) => ({
  product: state.product,
  auth: state.auth,
});

export default connect(mapStateToProps, { uploadProduct })(UploadProducts);
