import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songsReducer from "./reducers/songReducer";
import artistsReducer from "./reducers/artistReducer";
import fetchStatusReducer from "./reducers/fetchStatusReducer";
import rootSaga from "./sagas/rootSaga";

// Tạo middleware cho redux-saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
    artists: artistsReducer,
    fetchStatus: fetchStatusReducer,
  },
  // Sử dụng callback để cấu hình middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Chạy saga middleware
sagaMiddleware.run(rootSaga);

export default store;
