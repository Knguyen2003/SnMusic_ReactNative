import { all } from "redux-saga/effects";
import { watchFetchArtists } from "./artistSaga";
import { watchFetchAlbumTrending } from "./trendingAlbumSaga";

export default function* rootSaga() {
  yield all([watchFetchArtists(), watchFetchAlbumTrending()]);
}
