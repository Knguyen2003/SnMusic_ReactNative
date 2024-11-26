import {
   FETCH_ALBUMTRENDING_REQUEST,
   FETCH_ALBUMTRENDING_SUCCESS,
   FETCH_ALBUMTRENDING_FAILURE,
  } from "../actions/trendingAlbumAction.js";
  
  const initialState = {
    albumTrend: [],
    loading: false,
    error: null,
  };
  
  export default function albumTrendReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_ALBUMTRENDING_REQUEST:
        return { ...state, loading: true };
      case FETCH_ALBUMTRENDING_SUCCESS:
        return { ...state, loading: false, albumTrend: action.payload };
      case FETCH_ALBUMTRENDING_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  