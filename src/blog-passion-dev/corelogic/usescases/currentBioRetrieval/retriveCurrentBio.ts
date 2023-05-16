import { currentBioRetrievalAction } from "./currentBioRetrievalAction";
import { AppThunk, Dependencies } from "../../../store/reduxStore";



export const retrieveCurrentBio = (): AppThunk => {
    return async (dispatch, getState, { articleGateway }: Dependencies) => {
        const currentBio = await articleGateway.getCurrentBio();
        dispatch(currentBioRetrievalAction(currentBio));
    };
    }