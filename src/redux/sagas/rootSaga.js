import { all } from "redux-saga/effects";
import { watchFetchArtists } from "./artistSaga";

export default function* rootSaga() {
  yield all([watchFetchArtists()]);
}
