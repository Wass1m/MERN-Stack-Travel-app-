import { ADD_TO_CART, LOAD_CART, REMOVE_CART } from "./types";

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};

export const loadCart = () => (dispatch) => {
  dispatch({
    type: LOAD_CART,
  });
};

export const removeCartItem = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_CART,
    payload: id,
  });
};
