import { FakeArticleGateway } from "../../../adapters/secondary/fakeArticleGateway";
import { AppState, BreakingNews } from "../../../store/appState";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { retrieveCurrentBreakingNews } from "./retrieveCurrentBreakingNews";


describe('retrieveCurrentBreakingNews', () => {
    let store: ReduxStore;
    let articleGateway: FakeArticleGateway;
    let initialState: AppState;

    beforeEach(() => {
        articleGateway = new FakeArticleGateway();
        store = initReduxStore({articleGateway});
        initialState = store.getState();
    });

    it("should not contain any article initially", () => {
       expectCurrentBreakingNews(null);
    });

    it("should contain the current breaking news after it has been set", async () => {
        const breakingNews = {
            title: "Breaking news",
            content: "This is the breaking news",
            author: "Mélaïna Donati",
        };
        articleGateway.setCurrentBreakingNews(breakingNews);
        await store.dispatch(retrieveCurrentBreakingNews());
        expectCurrentBreakingNews(breakingNews);
    });

    it("should handle error when trying to get a non-set current article", async () => {
        await expect(store.dispatch(retrieveCurrentBreakingNews())).rejects.toThrow("No current breaking news");
    });



    const expectCurrentBreakingNews = (expectedBreakingNews : BreakingNews | null) => {
        const state = store.getState();
        expect(state).toEqual({
            ...initialState,
            currentBreakingNews : {
                data : expectedBreakingNews,
            }
        })
    }
});






























export {}