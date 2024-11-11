import { all } from "redux-saga/effects";
import { watchFetchSongs } from "./songSaga";
import { watchFetchArtists } from "./artistSaga";

export default function* rootSaga() {
  yield all([watchFetchSongs(), watchFetchArtists()]);
}
