import { ArticleRepository } from '../domain/repositories/ArticleRepository';
import { FakeArticleRepository } from '../data/repositories/FakeArticleRepository';
import { DisplayArticles } from '../usecases/displayArticles';


export class DependencyInjection {
  static getArticleRepository(): ArticleRepository {
    return new FakeArticleRepository();
  }

  static getDisplayArticles(): DisplayArticles {
    const articleRepository = this.getArticleRepository();
    return new DisplayArticles(articleRepository);
  }
}
