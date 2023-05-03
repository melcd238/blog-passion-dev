import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../domain/entities/Article';

interface ArticleState {
  articles: Article[];
  loading: boolean;
}

const initialState: ArticleState = {
  articles: [],
  loading: false,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setLoading, setArticles } = articleSlice.actions;

export default articleSlice.reducer;
