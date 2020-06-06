import { combineReducers } from "redux";
import productReducer from "./productReducer";
import errorReducer from "./errorReducer";
import sellerReducer from "./sellerReducer";

export default combineReducers({
  product: productReducer,
  error: errorReducer,
  seller: sellerReducer,
});
