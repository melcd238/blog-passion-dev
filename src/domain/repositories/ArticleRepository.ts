import { Article } from '../entities/Article';

export interface ArticleRepository {
    getAllArticles(): Promise<Article[]>;
}