import {
  FETCH_SONGBYALBUM_FAILURE,
  FETCH_SONGBYALBUM_SUCCESS,
  FETCH_SONGBYALBUM_REQUEST,
} from "../actions/albumSongAction";

const initialState = {
  songByAlbum: [],
  loading: false,
  error: null,
};

export default function songByAlbumsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGBYALBUM_REQUEST:
      return { ...state, loading: true };
    case FETCH_SONGBYALBUM_SUCCESS:
      return { ...state, loading: false, songByAlbum: action.payload };
    case FETCH_SONGBYALBUM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
