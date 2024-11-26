export const FETCH_ALBUMTRENDING_REQUEST = "FETCH_ALBUMTRENDING_REQUEST";
export const FETCH_ALBUMTRENDING_SUCCESS = "FETCH_ALBUMTRENDING_SUCCESS";
export const FETCH_ALBUMTRENDING_FAILURE = "FETCH_ALBUMTRENDING_FAILURE";


export const fetchAlbumTrenRequest = () => ({
  type: FETCH_ALBUMTRENDING_REQUEST,
});


export const fetchAlbumTrendSuccess = (albums) => ({
  type: FETCH_ALBUMTRENDING_SUCCESS,
  payload: albums,
});


export const fetchAlbumTrendFailure = (error) => ({
  type: FETCH_ALBUMTRENDING_FAILURE,
  payload: error,
});
