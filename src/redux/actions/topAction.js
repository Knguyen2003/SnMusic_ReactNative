export const FETCH_TOP_REQUEST = "FETCH_TOP_REQUEST";
export const FETCH_TOP_SUCCESS = "FETCH_TOP_SUCCESS";
export const FETCH_TOP_FAILURE = "FETCH_TOP_FAILURE";

export const fetchTopsRequest = () => ({
  type: FETCH_TOP_REQUEST,
});

export const fetchTopsSuccess = (tops) => ({
  type: FETCH_TOP_SUCCESS,
  payload: tops,
});

export const fetchTopsFailure = (error) => ({
  type: FETCH_TOP_FAILURE,
  payload: error,
});
