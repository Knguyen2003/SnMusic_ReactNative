import { all } from "redux-saga/effects";
import { watchFetchArtists } from "./artistSaga";

import { watchFetchAlbumTrending } from "./trendingAlbumSaga";
import { watchFetchTops } from "./topSaga";
import { watchFetchSongs } from "./songSaga";
import { watchFetchSongAlbums } from "./songAlbumSaga";
import { watchFetchSongTops } from "./songTopSaga";

export default function* rootSaga() {
  yield all([
    watchFetchArtists(),
    watchFetchTops(),
    watchFetchSongs(),
    watchFetchAlbumTrending(),
    watchFetchSongAlbums(),
    watchFetchSongTops(),
  ]);
}
