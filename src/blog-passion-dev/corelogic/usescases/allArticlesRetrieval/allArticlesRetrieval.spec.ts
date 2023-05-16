import { FakeArticleGateway } from "../../../adapters/secondary/fakeBlogGateway";
import { AppState, ArticlesArray } from "../../../store/appState";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { retrieveAllArticles } from "./retrieveAllArticles";




describe('All Articles Retrieval', () => {
    let store: ReduxStore;
    let articleGateway: FakeArticleGateway;
    let initialState: AppState;

    beforeEach(() => {
        articleGateway = new FakeArticleGateway();
        store = initReduxStore({articleGateway});
        initialState = store.getState();

    });

    it("should not contain any Articles initially", () => {
       expectAllArticles(null);
    });

    it("should contain the all Articles after it has been set", async () => {
        const allArticles = [
            {
                id: "1",
                title: "La programmation fonctionnelle en JavaScript",
                summary: "Dans cet article, nous explorons les bases de la programmation",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
                erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.`,
                publishDate: "01-05-2023",
                author: "Mélaïna Donati",
                tag: "Apprentissage",
                imgUrl: "https://picsum.photos/200/300",
            }, 
            {
                id: "2",
                title: "La programmation fonctionnelle en JavaScript",
                summary: "Dans cet article, nous explorons les bases de la programmation",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
                erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.`,
                publishDate: "01-05-2023",
                author: "Mélaïna Donati",
                tag: "Apprentissage",
                imgUrl: "https://picsum.photos/200/300",
            }, 
            {
                id: "3",
                title: "La programmation fonctionnelle en JavaScript",
                summary: "Dans cet article, nous explorons les bases de la programmation",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
                erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.`,
                publishDate: "01-05-2023",
                author: "Mélaïna Donati",
                tag: "Apprentissage",
                imgUrl: "https://picsum.photos/200/300",
            },
        ];
        
        articleGateway.setAllArticles(allArticles);
        await store.dispatch(retrieveAllArticles());
        expectAllArticles(allArticles);

    });

    it("should handle error when trying to get a non-set all Articles", async () => {
        await expect(store.dispatch(retrieveAllArticles())).rejects.toThrow("No articles");
    });


    const expectAllArticles = (expectedArticles : ArticlesArray | null) => {
        const state = store.getState();
        expect(state).toEqual({
            ...initialState,
            allArticles : {
                data : expectedArticles,
            }
        })
    }

});

















export{}