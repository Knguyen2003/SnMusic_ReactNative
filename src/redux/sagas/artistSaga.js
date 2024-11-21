import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchArtistsSuccess,
  fetchArtistsFailure,
  FETCH_ARTISTS_REQUEST,
} from "../actions/artistAction";
import { supabase } from "../../component/supabaseClient";

function* fetchArtistsSaga() {
  try {
    const { data, error } = yield call(() =>
      supabase.from("artist").select("*")
    );
    if (error) throw error;
    yield put(fetchArtistsSuccess(data));
  } catch (error) {
    yield put(fetchArtistsFailure(error.message));
  }
}

// Watcher Saga để theo dõi action FETCH_ARTISTS_REQUEST
export function* watchFetchArtists() {
  yield takeLatest(FETCH_ARTISTS_REQUEST, fetchArtistsSaga);
}
