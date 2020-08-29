import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAIL,
  UPLOAD_PRODUCT,
  UPLOAD_PRODUCT_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
} from "./types";
import axios from "axios";

export const onDropImages = (files) => async (dispatch) => {
  let formData = new FormData();
  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  formData.append("file", files[0]);

  try {
    const res = await axios.post("/api/product/uploadImage", formData, config);
    dispatch({
      type: UPLOAD_IMAGE,
      payload: res.data.image,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_IMAGE_FAIL,
      payload: error,
    });
  }
};

export const uploadProduct = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "/api/product/uploadProduct",
      formData,
      config
    );

    dispatch({
      type: UPLOAD_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_PRODUCT_FAIL,
    });
  }
};

export const getAllProducts = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/product", formData, config);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
    });
  }
};
