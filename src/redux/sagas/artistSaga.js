import { call, put, takeLatest } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";
import {
  fetchArtistsSuccess,
  fetchArtistsFailure,
  FETCH_ARTISTS_REQUEST,
} from "../actions/artistAction";
import { db } from "../../component/configFirebase";

// Hàm thực thi lấy danh sách nghệ sĩ từ Firestore
function* fetchArtists() {
  try {
    const artistsCollection = collection(db, "artists");
    const snapshot = yield call(() => getDocs(artistsCollection)); // Lấy các tài liệu trong collection "artists"
    const artistsList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    yield put(fetchArtistsSuccess(artistsList)); // Dispatch action thành công
  } catch (error) {
    yield put(fetchArtistsFailure(error.message)); // Dispatch action thất bại
  }
}

// Watcher Saga để theo dõi action FETCH_ARTISTS_REQUEST
export function* watchFetchArtists() {
  yield takeLatest(FETCH_ARTISTS_REQUEST, fetchArtists);
}
