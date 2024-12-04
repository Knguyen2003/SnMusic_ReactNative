export const FETCH_SONGBYALBUM_REQUEST = "FETCH_SONGBYALBUM_REQUEST";
export const FETCH_SONGBYALBUM_SUCCESS = "FETCH_SONGBYALBUM_SUCCESS";
export const FETCH_SONGBYALBUM_FAILURE = "FETCH_SONGBYALBUM_FAILURE";

export const fetchSongByAlbumRequest = (albumId) => ({
  type: FETCH_SONGBYALBUM_REQUEST,
  payload: { albumId },
});

export const fetchSongByAlbumSuccess = (songByAlbum) => ({
  type: FETCH_SONGBYALBUM_SUCCESS,
  payload: songByAlbum,
});

export const fetchSongByAlbumFailure = (error) => ({
  type: FETCH_SONGBYALBUM_FAILURE,
  payload: error,
});
