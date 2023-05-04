import { IarticleRepository } from '../coreLogic/domain/repositories/ArticleRepository';
import { Article } from '../coreLogic/domain/entities/Article';
import { displayArticles } from '../coreLogic/usecases/displayArticles';
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