// reducers/artistReducer.js

import {
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
} from "../actions/artistAction";

const initialState = {
  artists: [],
  loading: false,
  error: null,
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_ARTISTS_SUCCESS:
      return { ...state, loading: false, artists: action.payload };
    case FETCH_ARTISTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
