


export interface AppState {
    currentArticle: {
      data: Article | null;
    };
    currentBreakingNews: {
      data: BreakingNews | null;
    };
    currentBio: {
      data: Bio | null;
    };
    allArticles: {
      data: ArticlesArray | null;
    };
    currentLibrairies: {
      data: Librairies | null;
    };
  }
  
  //export type ArticleId = string;
  export type ArticlesArray = Article[];

  export type Article = {
    id: string;
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

  export type Bio = {
    name: string;
    fonction: string;
    description: string;
    picture: string;
    body: string;
    lkdn: string;
    github: string;

  };

  export type Librairies = {
    books: {
      title: string;
      picture: string;
      link: string;
    }[],
    learning: {
      title: string;
      picture: string;
      link: string;
    }[],
    blogs: {
      title: string;
      picture: string;
      link: string;
    }[],
    podcasts: {
      title: string;
      picture: string;
      link: string;
    }[],
  };

  