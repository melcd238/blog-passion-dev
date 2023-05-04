import { IarticleRepository } from '../coreLogic/domain/repositories/ArticleRepository';
import { Article } from '../coreLogic/domain/entities/Article';
import { displayArticles } from '../coreLogic/usecases/articlesUsecase/displayArticles';
import { FakeArticleRepository } from '../data/repositories/FakeArticleRepository';
import { IbiographieRepository } from '../coreLogic/domain/repositories/BiographieRepository';
import { Biographie } from '../coreLogic/domain/entities/Biographie';
import { displayBiographies } from '../coreLogic/usecases/biographieUsecase/displayBiographie';
import { FakeBiographieRepository } from '../data/repositories/FakeBiographieRepository';
import { displayBreakingnews } from '../coreLogic/usecases/breakingnewsUsecase/displayBreakingnews';
import { IbreakingnewsRepository } from '../coreLogic/domain/repositories/breakingnewsRepository';
import { FakeBreakingnewsRepository } from '../data/repositories/FakeBreakingnewsRepository';
import { Breakingnews } from '../coreLogic/domain/entities/Breakingnews';


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

  getBreakingnewsRepository: (): IbreakingnewsRepository => {
    return FakeBreakingnewsRepository;
  },

  getDisplayBreakingnews: () => {
    const breakingnewsRepository = DependencyInjection.getBreakingnewsRepository();
    return async (): Promise<Breakingnews> => {
      return displayBreakingnews(breakingnewsRepository);
    };
  }
};