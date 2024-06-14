import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// lưu auth vào local storage nên dùng persist của thư viện redux-persist
// khai báo rootReducer(dùng combineReducer)
const rootReducer = combineReducers({
  user: userReducer,
});
// cấu hình persistconfig
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
// persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// thay đổi store theo persistReducer và thêm middleware tránh lỗi của redux
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export persistor từ store
export let persistor = persistStore(store);
