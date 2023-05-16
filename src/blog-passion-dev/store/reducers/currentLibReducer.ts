import { createReducer } from "@reduxjs/toolkit";
import { currentLibRetrievalAction } from "../../corelogic/usescases/currentLibRetrieval/currentLibRetrievalAction";
import { AppState } from "../appState";



export const currentLibReducer = createReducer<AppState["currentLibrairies"]>(
    { data: null }, (builder) => {
        builder.addCase(currentLibRetrievalAction, (state, action) => {
            return { data: action.payload };
        });
    }
);