import { AppThunk, Dependencies } from "../../../store/reduxStore";
import { currentBreakingNewsRetrievalAction } from "./currentBreakingNewsRetrievalAction";



export const retrieveCurrentBreakingNews = (): AppThunk => {
    return async (dispatch, getState, { articleGateway }: Dependencies) => {
        const currentBreakingNews = await articleGateway.getCurrentBreakingNews();
        dispatch(currentBreakingNewsRetrievalAction(currentBreakingNews));
    };
    }