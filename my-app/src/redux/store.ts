import { configureStore } from '@reduxjs/toolkit'
import {fileFolderReducer} from "./reducers/FileFolderReducer";

export const store = configureStore({
    reducer: {
        fileFolderReducer
    },
})


export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch