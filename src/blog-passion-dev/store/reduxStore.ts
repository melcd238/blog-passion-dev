import { Action, AnyAction, configureStore, Store, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppState } from './appState';
import { useDispatch } from "react-redux";
import { ArticleGateway } from '../corelogic/gateways/articleGateway';
import { currentArticlerReducer as currentArticle } from './reducers/currentArticleReducer';

export type Dependencies ={
  articleGateway: ArticleGateway;
}

export const initReduxStore = (
  dependencies: Dependencies,
) => {
  return configureStore({
    reducer: {
      currentArticle,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
        serializableCheck: false,
      });
    }
  });
};

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, any, Action>;
};

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, any, AnyAction>;

export type AppDispatch = ThunkDispatch<AppState, any, Action>;

export const useAppDispatch: () => AppDispatch = useDispatch;


