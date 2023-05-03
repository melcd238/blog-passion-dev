import { AppDispatch } from '../redux/store';
import { setLoading, setArticles } from '../redux/articleSlice';
import { DependencyInjection } from '../../infrastructure/dependencyInjections';


export const fetchArticles = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  const displayArticles = DependencyInjection.getDisplayArticles();
  const articles = await displayArticles.execute();

  dispatch(setArticles(articles));
  dispatch(setLoading(false));
};
