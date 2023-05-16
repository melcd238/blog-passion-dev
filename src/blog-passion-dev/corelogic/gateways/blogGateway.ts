import { Article, ArticlesArray, Bio, BreakingNews, Librairies } from "../../store/appState";

export interface ArticleGateway {
    getCurrentArticle: () => Promise<Article>;
    getCurrentBreakingNews: () => Promise<BreakingNews>;
    getCurrentBio: () => Promise<Bio>;
    getAllArticles: () => Promise<ArticlesArray>;
    getCurrentLibrairies: () => Promise<Librairies>;
}