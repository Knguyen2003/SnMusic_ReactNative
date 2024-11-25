import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import artistsReducer from "./reducers/artistReducer";
import topsReducer from "./reducers/topReducer";
import songsReducer from "./reducers/songReducer";

import rootSaga from "./sagas/rootSaga";

// Tạo middleware cho redux-saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    artists: artistsReducer,
    tops: topsReducer,
    songs: songsReducer,
  },
  // Sử dụng callback để cấu hình middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Chạy saga middleware
sagaMiddleware.run(rootSaga);

export default store;
