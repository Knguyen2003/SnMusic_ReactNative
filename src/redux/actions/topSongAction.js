export const FETCH_SONGBYTOP_REQUEST = "FETCH_SONGBYTOP_REQUEST";
export const FETCH_SONGBYTOP_SUCCESS = "FETCH_SONGBYTOP_SUCCESS";
export const FETCH_SONGBYTOP_FAILURE = "FETCH_SONGBYTOP_FAILURE";

export const fetchSongByTopRequest = (Id) => ({
  type: FETCH_SONGBYTOP_REQUEST,
  payload: { Id },
});

export const fetchSongByTopSuccess = (songByTop) => ({
  type: FETCH_SONGBYTOP_SUCCESS,
  payload: songByTop,
});

export const fetchSongByTopFailure = (error) => ({
  type: FETCH_SONGBYTOP_FAILURE,
  payload: error,
});
