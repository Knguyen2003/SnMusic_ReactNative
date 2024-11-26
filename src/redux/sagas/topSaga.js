import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchTopsSuccess,
  fetchTopsFailure,
  FETCH_TOP_REQUEST,
} from "../actions/topAction";
import { supabase } from "../../component/supabaseClient";

function* fetchTopsSaga() {
  try {
    const { data, error } = yield call(() =>
      supabase.from("Top50Region").select("*")
    );
    if (error) throw error;
    yield put(fetchTopsSuccess(data));
  } catch (error) {
    yield put(fetchTopsFailure(error.message));
  }
}

export function* watchFetchTops() {
  yield takeLatest(FETCH_TOP_REQUEST, fetchTopsSaga);
}
