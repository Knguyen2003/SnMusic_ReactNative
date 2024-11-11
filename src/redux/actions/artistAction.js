export const FETCH_ARTISTS_REQUEST = "FETCH_ARTISTS_REQUEST";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";

// Action creator cho yêu cầu fetch nghệ sĩ
export const fetchArtistsRequest = () => ({
  type: FETCH_ARTISTS_REQUEST,
});

// Action creator cho khi fetch thành công
export const fetchArtistsSuccess = (artists) => ({
  type: FETCH_ARTISTS_SUCCESS,
  payload: artists,
});

// Action creator cho khi fetch thất bại
export const fetchArtistsFailure = (error) => ({
  type: FETCH_ARTISTS_FAILURE,
  payload: error,
});
