import axios from "axios";
import { returnErrors, clearErrors } from "./ErrorActions";

import { SELLERS_LOADED, SELLERS_LOADING } from "./Types";

export const loadSellers = () => (dispatch, getState) => {
  dispatch({ type: SELLERS_LOADING });

  axios
    .get("http://35.225.50.138:9091/otherSellers", {
      params: {
        productId: 9,
        variantId: 6,
      },
    })
    .then((res) =>
      dispatch({ type: SELLERS_LOADED, payload: res.data.otherSellerList })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.message, err.response.status));
    });
};
