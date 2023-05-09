import { AppThunk, Dependencies } from "../../../store/reduxStore";
import { currentArticleRetrievalAction } from "./currentArticleRetrievalAction";

export const retrieveCurrentArticle = (): AppThunk => {
    return async (dispatch, getState, { articleGateway }: Dependencies) => {
        const currentArticle = await articleGateway.getCurrentArticle();
        dispatch(currentArticleRetrievalAction(currentArticle));
    };
    };
