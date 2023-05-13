import { createReducer } from "@reduxjs/toolkit";
import { currentBreakingNewsRetrievalAction } from "../../corelogic/usescases/currentBreakingNewsRetrieval/currentBreakingNewsRetrievalAction";
import { AppState } from "../appState";



export const currentBreakingNewsReducer = createReducer<AppState["currentBreakingNews"]>(
    { data: null }, (builder) => {
        builder.addCase(currentBreakingNewsRetrievalAction, (state, action) => {
            return { data: action.payload };
        });
    });