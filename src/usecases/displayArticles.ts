import { IarticleRepository } from "../domain/repositories/ArticleRepository";
import { Article } from "../domain/entities/Article";




export const displayArticles = async (articleRepository: IarticleRepository): Promise<Article[]> => {
    const articles = await articleRepository.getAllArticles();
    return articles;
}