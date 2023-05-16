import { Action, AnyAction, configureStore, Store, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppState } from './appState';
import { useDispatch } from "react-redux";
import { ArticleGateway } from '../corelogic/gateways/blogGateway';
import { currentArticlerReducer as currentArticle } from './reducers/currentArticleReducer';
import { currentBreakingNewsReducer as currentBreakingNews } from './reducers/currentBreakingNewsReducer';
import { currentBioReducer as currentBio } from './reducers/currentBioReducer';
import { allArticlesReducer as allArticles } from './reducers/allArticlesReducer';
import { currentLibReducer as currentLibrairies } from './reducers/currentLibReducer';

export type Dependencies ={
  articleGateway: ArticleGateway;
}

export const initReduxStore = (
  dependencies: Dependencies,
) => {
  return configureStore({
    reducer: {
      currentArticle,
      currentBreakingNews,
      currentBio,
      allArticles,
      currentLibrairies,
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


