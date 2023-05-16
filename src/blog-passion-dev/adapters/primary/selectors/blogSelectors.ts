import { AppState } from "../../../store/appState";


export const blogSelectors = (state: AppState) => {
    return {
        currentArticle: state.currentArticle.data,
        currentBreakingNews: state.currentBreakingNews.data,
        currentBio: state.currentBio.data,
        allArticles: state.allArticles.data,
        currentLibrairies: state.currentLibrairies.data,
    };
}