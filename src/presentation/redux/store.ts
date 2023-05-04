import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import articleReducer from './articleSlice';

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
