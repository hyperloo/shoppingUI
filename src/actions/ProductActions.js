import axios from "axios";
import { returnErrors, clearErrors } from "./ErrorActions";

import { PRODUCT_LOADING, PRODUCT_LOADED } from "./Types";

export const loadProduct = () => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });

  axios
    .get("http://35.225.50.138:9091/productDetail/", {
      params: {
        sellerId: 12,
        productId: 6,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: PRODUCT_LOADED, payload: res.data.productDetail });
    })
    .catch((err) => {
      console.log("Data cannot be fetched due to server error ", err);
      dispatch(returnErrors(err.response.message, err.response.data.status));
    });
};
