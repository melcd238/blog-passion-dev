import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState";
import { currentArticleRetrievalAction } from "../../corelogic/usescases/currentArticleRetrieval/currentArticleRetrievalAction";


export const currentArticlerReducer = createReducer<AppState["currentArticle"]>(
    { data: null }, (builder) => {
        builder.addCase(currentArticleRetrievalAction, (state, action) => {
            return { data: action.payload };
        });
    }
);