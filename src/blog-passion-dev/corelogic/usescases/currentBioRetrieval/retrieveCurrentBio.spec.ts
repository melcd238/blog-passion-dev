import { FakeArticleGateway } from "../../../adapters/secondary/fakeBlogGateway";
import { AppState, Bio } from "../../../store/appState";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { retrieveCurrentBio } from "./retriveCurrentBio";






describe('Retrieve Current Bio', () => {
    let store: ReduxStore;
    let articleGateway: FakeArticleGateway;
    let initialState: AppState;

    beforeEach(() => {
        articleGateway = new FakeArticleGateway();
        store = initReduxStore({articleGateway});
        initialState = store.getState();
    });

    it("should not contain any Bio initially", () => {
         expectCurrentBio(null);
    });

    it("should contain the current Bio after it has been set", async () => {
        const bio = {
            name: "Bio",
            fonction: "This is the Bio",
            description:"fdsfsfds",
            picture:"fdsfsfds",
            body:"fdsfsfds",
            lkdn: "fdsfsfds",
            github: "fdsfsfds",
        };
        articleGateway.setCurrentBio(bio);
        await store.dispatch(retrieveCurrentBio());
        expectCurrentBio(bio);
    });

    it("should handle error when trying to get a non-set current Bio", async () => {
        await expect(store.dispatch(retrieveCurrentBio())).rejects.toThrow("No current bio");
    });


    const expectCurrentBio = (expectedBio : Bio | null) => {
        const state = store.getState();
        expect(state).toEqual({
            ...initialState,
            currentBio : {
                data : expectedBio,
            }
        })
    }

});




































export{}