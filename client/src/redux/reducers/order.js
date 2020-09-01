import {
  ADD_ORDER,
  ADD_ORDER_FAIL,
  GET_MY_ORDERS,
  GET_MY_ORDERS_FAIL,
  CLEAR_ORDERS,
} from "../actions/types";

const initialState = {
  order: null,
  orders: [],
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ORDER:
      return {
        ...state,
        order: payload,
        loading: false,
      };
    case ADD_ORDER_FAIL:
      return {
        ...state,
        order: null,
        loading: false,
      };
    case GET_MY_ORDERS:
      return {
        ...state,
        orders: payload,
        loading: false,
      };
    case GET_MY_ORDERS_FAIL:
      return {
        ...state,
        orders: [],
        loading: false,
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: [],
        loading: false,
      };
    default:
      return state;
  }
}
