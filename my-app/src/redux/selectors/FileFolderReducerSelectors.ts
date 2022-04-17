import {AppStateType} from "../store";

export const getFilesSelector = (state: AppStateType) => state.fileFolderReducer.files
export const getFoldersSelector = (state: AppStateType) => state.fileFolderReducer.folders
export const getLoadingSelector = (state: AppStateType) => state.fileFolderReducer.loading
export const getErrorMessage = (state: AppStateType) => state.fileFolderReducer.error