import { createAction } from "@reduxjs/toolkit";
import { Bio } from "../../../store/appState";


export const currentBioRetrievalAction = createAction<Bio>(
    "CURRENT_BIO_RETRIEVED"
);
