import {
  FETCH_TOP_REQUEST,
  FETCH_TOP_SUCCESS,
  FETCH_TOP_FAILURE,
} from "../actions/topAction";

const initialState = {
  tops: [],
  loading: false,
  error: null,
};

export default function topsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_REQUEST:
      return { ...state, loading: true };
    case FETCH_TOP_SUCCESS:
      return { ...state, loading: false, tops: action.payload };
    case FETCH_TOP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
