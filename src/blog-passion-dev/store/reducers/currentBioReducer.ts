import { createReducer } from "@reduxjs/toolkit";
import { currentBioRetrievalAction } from "../../corelogic/usescases/currentBioRetrieval/currentBioRetrievalAction";
import { AppState } from "../appState";


export const currentBioReducer = createReducer<AppState["currentBio"]>(
    { data: null }, (builder) => {
        builder.addCase(currentBioRetrievalAction, (state, action) => {
            return { data: action.payload };
        });
    });