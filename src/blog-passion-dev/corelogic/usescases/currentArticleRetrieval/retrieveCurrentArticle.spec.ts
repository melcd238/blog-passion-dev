import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { retrieveCurrentArticle } from "./retrieveCurrentArticle";
import { FakeArticleGateway } from "../../../adapters/secondary/fakeArticleGateway";
import { AppState, Article } from "../../../store/appState";


describe("retrieveCurrentArticle", () => {
    let store: ReduxStore;
    let articleGateway: FakeArticleGateway;
    let initialState: AppState;

    beforeEach(() => {
        articleGateway = new FakeArticleGateway();
        store = initReduxStore({articleGateway});
        initialState = store.getState();
    });

    it("should not contain any article initially", () => {
       expectCurrentArticle(null);
    });
    
    it("should retrieve the current article in home page", async () => {
        const currentArticle = {
            id: "1",
            title: "La programmation fonctionnelle en JavaScript",
            summary: "Dans cet article, nous explorons les bases de la programmation fonctionnelle, en nous concentrant sur l'immuabilité, la composition et les fonctions pures.",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
            vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
            maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
            consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
            aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
            auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
            erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
            vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
            maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
            consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
            aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
            auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
            erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.`,
            publishDate: "01-05-2023",
            author: "Mélaïna Donati",
            tag: "Apprentissage",
            imgUrl: "https://picsum.photos/200/300",
        };
        articleGateway.setCurrentArticle(currentArticle);
        await store.dispatch(retrieveCurrentArticle());
        expectCurrentArticle(currentArticle);
    });

    it("should handle error when trying to get a non-set current article", async () => {
        await expect(store.dispatch(retrieveCurrentArticle())).rejects.toThrow("No current article");
    });
    
    
    
    


const expectCurrentArticle = (expectedArticle : Article | null) => {
    const state = store.getState();
    expect(state).toEqual({
        ...initialState,
        currentArticle : {
            data : expectedArticle,
        }
    })
}




});



export{}