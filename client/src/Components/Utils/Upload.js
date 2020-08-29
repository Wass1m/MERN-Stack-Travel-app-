import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { onDropImages } from "../../redux/actions/product";

const Upload = ({ onDropImages, product: { images } }) => {
  return (
    <div className="drop-zone">
      <Dropzone onDrop={onDropImages} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="drop-box">
            <input {...getInputProps()} /> <span>+</span>
          </div>
        )}
      </Dropzone>
      <div className="drop-in">
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${image}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Upload.propTypes = {};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { onDropImages })(Upload);
