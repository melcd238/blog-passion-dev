import { AppThunk , Dependencies} from "../../../store/reduxStore";
import { currentLibRetrievalAction } from "./currentLibRetrievalAction";





export const currentLibRetrieval = (): AppThunk => {
    return  async (dispatch, getState, { articleGateway }: Dependencies) => {
        const currentLib = await articleGateway.getCurrentLibrairies();
        dispatch(currentLibRetrievalAction(currentLib));
    };
}