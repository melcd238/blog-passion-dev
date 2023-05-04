import { IarticleRepository } from '../coreLogic/domain/repositories/ArticleRepository';
import { Article } from '../coreLogic/domain/entities/Article';
import { displayArticles } from '../coreLogic/usecases/displayArticles';
import { FakeArticleRepository } from '../data/repositories/FakeArticleRepository';
import { IbiographieRepository } from '../coreLogic/domain/repositories/BiographieRepository';
import { Biographie } from '../coreLogic/domain/entities/Biographie';
import { displayBiographies } from '../coreLogic/usecases/displayBiographie';
import { FakeBiographieRepository } from '../data/repositories/FakeBiographieRepository';

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

  getBiographieRepository: (): IbiographieRepository => {
    return FakeBiographieRepository;
  },

  getDisplayBiographies: () => {
    const biographieRepository = DependencyInjection.getBiographieRepository();
    return async (): Promise<Biographie> => {
      return displayBiographies(biographieRepository);
    };
  },
};