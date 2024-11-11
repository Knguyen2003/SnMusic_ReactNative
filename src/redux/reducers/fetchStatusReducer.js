import { FETCH_STATUS } from "../actions/fetchStatus";

const initialState = {
  songsLoaded: false,
  artistsLoaded: false,
};

const fetchStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS:
      return {
        ...state,
        songsLoaded: action.payload.songsLoaded,
        artistsLoaded: action.payload.artistsLoaded,
      };
    default:
      return state;
  }
};

export default fetchStatusReducer;
