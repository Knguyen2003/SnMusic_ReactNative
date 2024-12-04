import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSongByAlbumSuccess,
  fetchSongByAlbumFailure,
  FETCH_SONGBYALBUM_REQUEST,
} from "../actions/albumSongAction";
import { supabase } from "../../component/supabaseClient";

function* fetchSongAlbumsSaga(action) {
  try {
    const { albumId } = action.payload;

    // Truy vấn các bài hát từ bảng album_song dựa trên id_album
    const { data: songData, error: songError } = yield call(() =>
      supabase
        .from("album_song")
        .select("id_song") // Lấy id_song từ bảng album_song
        .eq("id_album", albumId)
    );
    if (songError) throw songError;

    // Lấy thông tin các bài hát từ bảng song
    const songIds = songData.map((item) => item.id_song);
    const { data: songs, error: songsError } = yield call(
      () =>
        supabase
          .from("song")
          .select("id, name, image,file_url")
          .in("id", songIds) // Lọc các bài hát theo id_song
    );
    if (songsError) throw songsError;

    // Lấy thông tin nghệ sĩ từ bảng song_artist
    const { data: songArtistData, error: songArtistError } = yield call(() =>
      supabase
        .from("song_artist")
        .select("id_song, artist(id, name)") // Lấy thông tin nghệ sĩ
        .in("id_song", songIds)
    );
    if (songArtistError) throw songArtistError;

    // Kết hợp thông tin bài hát và nghệ sĩ
    const songsWithArtists = songs.map((song) => {
      const artists = songArtistData
        .filter((artist) => artist.id_song === song.id)
        .map((artist) => artist.artist);

      return {
        ...song,
        artists, // Thêm danh sách nghệ sĩ vào bài hát
      };
    });

    // Gửi kết quả
    yield put(fetchSongByAlbumSuccess(songsWithArtists));
  } catch (error) {
    yield put(fetchSongByAlbumFailure(error.message));
  }
}

export function* watchFetchSongAlbums() {
  yield takeLatest(FETCH_SONGBYALBUM_REQUEST, fetchSongAlbumsSaga);
}
