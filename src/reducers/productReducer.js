import { PRODUCT_LOADING, PRODUCT_LOADED } from "../actions/Types";

const initialState = {
  product: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LOADED:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    default:
      return state;
  }
}
