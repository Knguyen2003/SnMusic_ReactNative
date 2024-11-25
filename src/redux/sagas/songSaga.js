import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSongsFailure,
  fetchSongsSuccess,
  FETCH_SONGS_REQUEST,
} from "../actions/songAction";
import { supabase } from "../../component/supabaseClient";

function* fetchSongsSaga() {
  try {
    const { data, error } = yield call(() => supabase.from("song").select("*"));
    if (error) throw error;
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export function* watchFetchSongs() {
  yield takeLatest(FETCH_SONGS_REQUEST, fetchSongsSaga);
}
