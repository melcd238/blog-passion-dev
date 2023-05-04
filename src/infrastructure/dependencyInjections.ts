import { IarticleRepository } from '../domain/repositories/ArticleRepository';
import { Article } from '../domain/entities/Article';
import { displayArticles } from '../usecases/displayArticles';
import { FakeArticleRepository } from '../data/repositories/FakeArticleRepository';

export const DependencyInjection = {
  getArticleRepository: (): IarticleRepository => {
    return FakeArticleRepository;
  },

  getDisplayArticles: () => {
    const articleRepository = DependencyInjection.getArticleRepository();
    return async (): Promise<Article[]> => {
      return displayArticles(articleRepository);
    };
  },
};