import { Article } from '../entities/Article';

export interface IarticleRepository {
    getAllArticles(): Promise<Article[]>;
}