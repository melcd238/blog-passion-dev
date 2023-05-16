import { createAction } from "@reduxjs/toolkit";
import { ArticlesArray } from "../../../store/appState";


export const allArticlesRetrievalAction = createAction<ArticlesArray>(
    "ALL_ARTICLES_RETRIEVED"
);



