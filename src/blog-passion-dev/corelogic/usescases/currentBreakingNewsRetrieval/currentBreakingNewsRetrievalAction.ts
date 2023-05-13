import { createAction } from "@reduxjs/toolkit";
import { BreakingNews } from "../../../store/appState";



export const currentBreakingNewsRetrievalAction = createAction<BreakingNews>(
    "CURRENT_BREAKING_NEWS_RETRIEVED"
);