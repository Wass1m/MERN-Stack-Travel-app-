import {
  ADD_TO_CART,
  LOAD_CART,
  REMOVE_CART,
  ADD_SHIPPING,
  ADD_PAYMENT,
} from "./types";

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

export const addShipping = (id) => (dispatch) => {
  dispatch({
    type: ADD_SHIPPING,
    payload: id,
  });
};

export const addPayment = (id) => (dispatch) => {
  dispatch({
    type: ADD_PAYMENT,
    payload: id,
  });
};
