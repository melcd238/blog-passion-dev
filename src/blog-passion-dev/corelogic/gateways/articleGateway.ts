import { Article, BreakingNews } from "../../store/appState";

export interface ArticleGateway {
    getCurrentArticle: () => Promise<Article>;
    getCurrentBreakingNews: () => Promise<BreakingNews>;
}