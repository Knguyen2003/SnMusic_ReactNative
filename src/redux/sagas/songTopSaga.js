import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSongByTopSuccess,
  fetchSongByTopFailure,
  FETCH_SONGBYTOP_REQUEST,
} from "../actions/topSongAction";
import { supabase } from "../../component/supabaseClient";

function* fetchSongTopsSaga(action) {
  try {
    const { Id } = action.payload;

    const { data: songData, error: songError } = yield call(() =>
      supabase
        .from("top_song")
        .select("id_song") 
        .eq("id_top", Id)
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
    yield put(fetchSongByTopSuccess(songsWithArtists));
  } catch (error) {
    yield put(fetchSongByTopFailure(error.message));
  }
}

export function* watchFetchSongTops() {
  yield takeLatest(FETCH_SONGBYTOP_REQUEST, fetchSongTopsSaga);
}
