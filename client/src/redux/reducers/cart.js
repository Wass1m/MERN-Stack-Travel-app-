import {
  ADD_TO_CART,
  LOAD_CART,
  REMOVE_CART,
  ADD_SHIPPING,
  ADD_PAYMENT,
  CLEAR_CART,
} from "../actions/types";
import Cookie from "js-cookie";

const initialState = {
  cartItems: [],
  shipping: null,
  payment: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      let item = payload;
      let product = state.cartItems.find((elm) => elm._id === item._id);
      if (product) {
        const tempItems = state.cartItems.map((elm) =>
          elm._id === item._id ? item : elm
        );
        Cookie.set("cartItems", JSON.stringify(tempItems));
        return {
          ...state,
          cartItems: state.cartItems.map((elm) =>
            elm._id === item._id ? item : elm
          ),
        };
      }
      let tempItems2 = [...state.cartItems, payload];
      Cookie.set("cartItems", JSON.stringify(tempItems2));
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case LOAD_CART:
      const cartItems = Cookie.getJSON("cartItems");
      if (cartItems) {
        return { ...state, cartItems };
      }
      return state;
    case REMOVE_CART:
      let removedArray = state.cartItems.filter((item) => item._id !== payload);
      Cookie.set("cartItems", JSON.stringify(removedArray));
      return {
        ...state,
        cartItems: removedArray,
      };
    case ADD_SHIPPING:
      return {
        ...state,
        shipping: payload,
      };
    case ADD_PAYMENT:
      return {
        ...state,
        payment: payload,
      };
    case CLEAR_CART:
      Cookie.remove("cartItems");
      return {
        ...state,
        cartItems: [],
        payment: null,
        shipping: null,
      };
    default:
      return state;
  }
}
