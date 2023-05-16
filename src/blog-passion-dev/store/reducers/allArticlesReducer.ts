import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState";
import { allArticlesRetrievalAction } from "../../corelogic/usescases/allArticlesRetrieval/allArticlesRetrievalAction";


export const allArticlesReducer = createReducer<AppState["allArticles"]>(
    { data: null }, (builder) => {
        builder.addCase(allArticlesRetrievalAction, (state, action) => {
            return { data: action.payload };
        });
    }
);