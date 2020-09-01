import {
  ADD_ORDER,
  ADD_ORDER_FAIL,
  CLEAR_CART,
  GET_MY_ORDERS,
  GET_MY_ORDERS_FAIL,
  CLEAR_ORDERS,
} from "./types";
import axios from "axios";

export const addOrder = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/order", formData, config);

    dispatch({ type: ADD_ORDER, payload: res.data });
    dispatch({ type: CLEAR_CART });
  } catch (error) {
    dispatch({
      type: ADD_ORDER_FAIL,
    });
  }
};

export const getMyOrders = (id) => async (dispatch) => {
  dispatch({ type: CLEAR_ORDERS });

  try {
    const res = await axios.get(`/api/order/my`);

    dispatch({
      type: GET_MY_ORDERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MY_ORDERS_FAIL,
    });
  }
};
