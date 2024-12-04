import {
    FETCH_SONGBYTOP_FAILURE,
    FETCH_SONGBYTOP_SUCCESS,
    FETCH_SONGBYTOP_REQUEST,
  } from "../actions/topSongAction";
  
  const initialState = {
    songByTop: [],
    loading: false,
    error: null,
  };
  
  export default function songByTopsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_SONGBYTOP_REQUEST:
        return { ...state, loading: true };
      case FETCH_SONGBYTOP_SUCCESS:
        return { ...state, loading: false, songByTop: action.payload };
      case FETCH_SONGBYTOP_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  