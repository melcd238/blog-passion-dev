import { ArticleGateway } from "../../corelogic/gateways/blogGateway";
import { Article, Bio , BreakingNews , ArticlesArray, Librairies} from "../../store/appState";


export class FakeArticleGateway implements ArticleGateway {
    private _currentArticle: Article | null = null;
    private _currentBreakingNews: BreakingNews | null = null;
    private _currentBio: Bio | null = null;
    private _allArticles: ArticlesArray | null = null;
    private _currentLibrairies : Librairies | null = null;

    async getCurrentArticle(): Promise<Article> {
        if(this._currentArticle === null) {
            throw new Error("No current article");
        }
        return this._currentArticle;
    }


    async getCurrentBio(): Promise<Bio> {   
        if(this._currentBio === null) {
            throw new Error("No current bio");
        }
        return this._currentBio;
    }

    async getCurrentBreakingNews(): Promise<BreakingNews> {
        if(this._currentBreakingNews === null) {
            throw new Error("No current breaking news");
        }
        return this._currentBreakingNews;

    }

    async getAllArticles(): Promise<ArticlesArray> {
        if(this._allArticles === null) {
            throw new Error("No articles");
        }
        return this._allArticles;
    }

    async getCurrentLibrairies(): Promise<Librairies> {
        if(this._currentLibrairies === null) {
            throw new Error("No librairies");
        }
        return this._currentLibrairies;
    }

    setAllArticles(allArticles: ArticlesArray) {
        this._allArticles = allArticles;
    }


    setCurrentArticle(article: Article) {
        this._currentArticle = article;
    }


    setCurrentBio(bio: Bio) {
        this._currentBio = bio;
    }

    setCurrentBreakingNews(breakingNews: BreakingNews) {
        this._currentBreakingNews = breakingNews;
    }

    setCurrentLibrairies(librairies: Librairies) {
        this._currentLibrairies = librairies;
    }
}