import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAIL,
  UPLOAD_PRODUCT,
  UPLOAD_PRODUCT_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
} from "../actions/types";

const initialState = {
  products: [],
  product: null,
  images: [],
  error: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        images: [...state.images, payload],
      };
    case UPLOAD_IMAGE_FAIL:
      return { ...state, error: payload };
    case UPLOAD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
        product: payload,
        images: [],
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...payload],
        loading: false,
      };
    case UPLOAD_PRODUCT_FAIL:
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        product: null,
        products: [],
        images: [],
        loading: false,
      };
    default:
      return state;
  }
}
