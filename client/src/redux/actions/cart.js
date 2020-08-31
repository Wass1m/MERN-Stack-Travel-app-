import { ADD_TO_CART, LOAD_CART } from "./types";

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
