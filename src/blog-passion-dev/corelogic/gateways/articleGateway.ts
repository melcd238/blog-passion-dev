import { Article } from "../../store/appState";

export interface ArticleGateway {
    getCurrentArticle: () => Promise<Article>;
}