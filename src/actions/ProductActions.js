import axios from "axios";
import { returnErrors, clearErrors } from "./ErrorActions";

import { PRODUCT_LOADING, PRODUCT_LOADED } from "./Types";

export const loadProduct = () => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });

  axios
    .get("//35.225.50.138:9091/productDetail/", {
      params: {
        sellerId: 12,
        productId: 6,
      },
    })
    .then((res) => {
      dispatch({ type: PRODUCT_LOADED, payload: res.data.productDetail });
    })
    .catch((err) => {
      // console.log(err);
      dispatch(returnErrors(err.response.message, err.response.data.status));
    });
};
