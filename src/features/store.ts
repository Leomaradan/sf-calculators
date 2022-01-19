import { configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import fortressSlice from "./fortress/fortressSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default () => {
  let persistor = persistStore(store);
  return { store, persistor };
};
