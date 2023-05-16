import { createAction } from "@reduxjs/toolkit";
import { Librairies } from "../../../store/appState";


export const currentLibRetrievalAction = createAction<Librairies>(
    "CURRENT_LIB_RETRIEVED"
);