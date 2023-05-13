import { ArticleGateway } from "../../corelogic/gateways/articleGateway";
import { Article, BreakingNews } from "../../store/appState";


export class FakeArticleGateway implements ArticleGateway {
    private _currentArticle: Article | null = null;
    private _currentBreakingNews: BreakingNews | null = null;

    async getCurrentArticle(): Promise<Article> {
        if(this._currentArticle === null) {
            throw new Error("No current article");
        }
        return this._currentArticle;
    }

    async getCurrentBreakingNews(): Promise<BreakingNews> {
        if(this._currentBreakingNews === null) {
            throw new Error("No current breaking news");
        }
        return this._currentBreakingNews;

    }

    setCurrentArticle(article: Article) {
        this._currentArticle = article;
    }

    setCurrentBreakingNews(breakingNews: BreakingNews) {
        this._currentBreakingNews = breakingNews;
    }
}