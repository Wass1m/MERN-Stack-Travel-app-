import { combineReducers } from "redux";

import alert from "./alert";
import auth from "./auth";
import product from "./product";
import cart from "./cart";
export default combineReducers({ cart, alert, auth, product });
