import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import { useEffect } from "react";

const ProductImage = ({ product }) => {
  const [imagesList, setimagesList] = useState([]);

  useEffect(() => {
    let imagearray = [];

    product.images.map((image) => {
      imagearray.push({
        original: `http://localhost:5000/${image}`,
        thumbnail: `http://localhost:5000/${image}`,
      });
    });

    setimagesList(imagearray);
  }, []);

  return product === null ? (
    <Fragment>loading images...</Fragment>
  ) : (
    <div>
      <ImageGallery items={imagesList} />
    </div>
  );
};

ProductImage.propTypes = {};

export default ProductImage;
