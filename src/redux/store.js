import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import artistsReducer from "./reducers/artistReducer";
import albumTrendReducer from "./reducers/trendingAlbumReducer";

import rootSaga from "./sagas/rootSaga";

// Tạo middleware cho redux-saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    artists: artistsReducer,
    albumTrend: albumTrendReducer,
  },
  // Sử dụng callback để cấu hình middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Chạy saga middleware
sagaMiddleware.run(rootSaga);

export default store;
