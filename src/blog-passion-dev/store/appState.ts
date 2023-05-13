


export interface AppState {
    currentArticle: {
      data: Article | null;
    };
    currentBreakingNews: {
      data: BreakingNews | null;
    };
   /* allArticles: {
      data: Record<ArticleId, Article> | null;
    };*/
  }
  
  export type ArticleId = string;
  
  export type Article = {
    id: ArticleId;
    author: string;
    publishDate: string; 
    title: string;
    summary: string;
    content: string;
    tag: string;
    imgUrl: string; 
  };

  export type BreakingNews = {
    title: string;
    content: string;
    author: string;
  };
  