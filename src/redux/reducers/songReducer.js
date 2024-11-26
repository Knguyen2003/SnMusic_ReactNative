import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_REQUEST,
} from "../actions/songAction";

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

export default function songsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SONGS_SUCCESS:
      return { ...state, loading: false, songs: action.payload };
    case FETCH_SONGS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
