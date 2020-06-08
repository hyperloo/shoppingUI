import { SELLERS_LOADING, SELLERS_LOADED } from "../actions/Types";

const initialState = {
  sellers: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELLERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SELLERS_LOADED:
      console.log("inside", action.payload);
      return {
        ...state,
        sellers: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
