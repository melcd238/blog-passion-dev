import { ArticleGateway } from "../../corelogic/gateways/articleGateway";
import { Article } from "../../store/appState";


export class FakeArticleGateway implements ArticleGateway {
    private _currentArticle: Article | null = null;

    async getCurrentArticle(): Promise<Article> {
        if(this._currentArticle === null) {
            throw new Error("No current article");
        }
        return this._currentArticle;
    }

    setCurrentArticle(article: Article) {
        this._currentArticle = article;
    }
}