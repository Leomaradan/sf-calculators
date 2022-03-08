import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

/* const logger = createLogger({
  predicate: (getState, action) => !action.type.includes('persist/'),
  collapsed: true,
  duration: true,
  diff: true,
}); */

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareEnhancer = applyMiddleware(/* logger */);
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(persistedReducer, undefined, middlewareEnhancer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default () => {
  const persistor = persistStore(store);
  return { persistor, store };
};
