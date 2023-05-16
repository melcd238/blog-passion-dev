import { AppThunk, Dependencies } from "../../../store/reduxStore";
import { allArticlesRetrievalAction } from "./allArticlesRetrievalAction";


export const retrieveAllArticles = (): AppThunk => {
    return async (dispatch, getState, { articleGateway }: Dependencies) => {
        const allArticles = await articleGateway.getAllArticles();
        dispatch(allArticlesRetrievalAction(allArticles));
    };
    }