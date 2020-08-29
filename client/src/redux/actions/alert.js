import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuid } from "uuid";

export const setAlert = (msg, typeAlert) => (dispatch) => {
  let id = uuid();

  dispatch({
    type: SET_ALERT,
    payload: {
      id,
      msg,
      typeAlert,
    },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, 3000);
};
