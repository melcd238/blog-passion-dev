import { createAction } from "@reduxjs/toolkit";
import { Article } from "../../../store/appState";

export const currentArticleRetrievalAction = createAction<Article>(
    "CURRENT_ARTICLE_RETRIEVED"
);