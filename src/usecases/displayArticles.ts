import { ArticleRepository } from "../domain/repositories/ArticleRepository";
import { Article } from "../domain/entities/Article";


export class DisplayArticles {
    constructor(private articleRepository: ArticleRepository) {}

    async execute(): Promise<Article[]> {
        return this.articleRepository.getAllArticles();
    }
}