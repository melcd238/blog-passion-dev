import { AppState } from "../../../store/appState";


export const blogSelectors = (state: AppState) => {
    return {
        currentArticle: state.currentArticle.data,
        currentBreakingNews: state.currentBreakingNews.data,
    };
}