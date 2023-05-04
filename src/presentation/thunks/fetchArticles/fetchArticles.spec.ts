import { DependencyInjection } from "../../../infrastructure/dependencyInjections";
import { store } from "../../redux/store";
import { fetchArticles } from "./fetchArticles";




describe('fecthArticles test', () => {
    it('should have an initial empty state', () => {
      const state = store.getState();
      expect(state.article.articles).toEqual([]);
    });
  
    it('should fetch articles and update the store', async () => {
      const dispatch = store.dispatch;
      const expectedArticles = await DependencyInjection.getDisplayArticles()();
  
      await dispatch(fetchArticles());
  
      const state = store.getState();
      expect(state.article.articles).toEqual(expectedArticles);
      expect(expectedArticles.length).toBe(3);
    });
  });















export{}