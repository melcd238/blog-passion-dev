
import { FakeArticleGateway } from "../../../adapters/secondary/fakeBlogGateway";
import { AppState, Librairies } from "../../../store/appState";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { currentLibRetrieval } from "./currentLibRetrieval";




describe('current library retrieval', () =>{
    let store: ReduxStore;
    let articleGateway: FakeArticleGateway;
    let initialState: AppState;

    beforeEach(() => {
        articleGateway = new FakeArticleGateway();
        store = initReduxStore({articleGateway});
        initialState = store.getState();

    });


    it ("should not contain any Articles initially", () =>{
       expectCurrentLibraries(null);
    })

    it("should contain tle librairie after it has been set", async () => {
        const librairies = {
            books:[{
                title:"title",
                picture:"picture",
                link:"link"}],
            learning:[{
                title:"title",
                picture:"picture",
                link:"link"}],
            blogs:[{
                title:"title",
                picture:"picture",
                link:"link"}],
            podcasts:[{
                title:"title",
                picture:"picture",
                link:"link"}],
        };
        articleGateway.setCurrentLibrairies(librairies);
        await store.dispatch(currentLibRetrieval());
        expectCurrentLibraries(librairies);
    });

    it("should handle error when trying to get a non-set current librairies", async () => {
        await expect(store.dispatch(currentLibRetrieval())).rejects.toThrow("No librairies");
    });



    const expectCurrentLibraries = (expectCurrentLibraries : Librairies | null) => {
        const state = store.getState();
        expect(state).toEqual({
            ...initialState,
            currentLibrairies : {
                data : expectCurrentLibraries,
            }
        })
    }
})



























export{}