import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchAlbumTrendSuccess,
  fetchAlbumTrendFailure,
  FETCH_ALBUMTRENDING_REQUEST,
} from "../actions/trendingAlbumAction";
import { supabase } from "../../component/supabaseClient";

function* fetchAlbumTrendSaga() {
  try {
    const { data, error } = yield call(() =>
      supabase.from("album").select("*")
    );
    if (error) throw error;
    yield put(fetchAlbumTrendSuccess(data));
  } catch (error) {
    yield put(fetchAlbumTrendFailure(error.message));
  }
}

export function* watchFetchAlbumTrending() {
  yield takeLatest(FETCH_ALBUMTRENDING_REQUEST, fetchAlbumTrendSaga);
}
