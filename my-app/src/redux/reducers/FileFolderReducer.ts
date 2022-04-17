import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addFiles, createFolder, getFolderFiles, removeFileOrFolder, renameFile, renameFolder} from "../../api/api";
import {
    createFolderParams,
    errorResponse, errorResponseFiles,
    FileType,
    FolderType,
    getFileFoldersResponse, removeFileOrFolderParams,
    renameFileOrFolderParams
} from "../../api/api.types";

export const getFolderFileThunk = createAsyncThunk(
    'getFilesFolders',
    () => {
        return getFolderFiles()
    }
)

export const renameFolderThunk = createAsyncThunk(
    'renameFolder',
    (payload: renameFileOrFolderParams) => {
        return renameFolder(payload)
    }
)

export const renameFileThunk = createAsyncThunk(
    'renameFile',
    (payload: renameFileOrFolderParams) => {
        return renameFile(payload)
    }
)

export const createFolderThunk = createAsyncThunk(
    'createFolder',
    async (payload: createFolderParams, thunkAPI) => {
        try {
            return await createFolder(payload)
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
export const removeFileOrFolderThunk = createAsyncThunk(
    'removeFileOrFolder',
    async (payload: removeFileOrFolderParams) => {
        const data = await removeFileOrFolder(payload)
        return {
            success: data.affected === 1,
            title: payload.title,
            type: payload.type
        }
    }
)

export const addFilesThunk = createAsyncThunk(
    'addFiles',
    async (files: FileList, thunkAPI) => {
        try {
            return await addFiles(files)
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

type initialStateType = getFileFoldersResponse & {
    error: string
    loading: boolean
}

const initialSlice = createSlice<initialStateType, any>({
    name: 'fileFolderReducer',
    initialState: {folders: [], files: [], loading: true, error: ''},
    reducers: {
        removeError: state => {
            state.error = ''
        }
    },
    extraReducers: {
        [getFolderFileThunk.fulfilled.type]: (state, action: PayloadAction<getFileFoldersResponse>) => {
            state.files = action.payload.files
            state.folders = action.payload.folders
            state.loading = false
        },
        [renameFolderThunk.fulfilled.type]: (state, action: PayloadAction<FolderType>) => {
            state.folders.map((item, i) => {
                if(item.id === action.payload.id) item.title = action.payload.title
            })
        },
        [renameFileThunk.fulfilled.type]: (state, action: PayloadAction<FileType>) => {
            state.files.map((item) => {
                if(item.id === action.payload.id) item.filename = action.payload.filename
            })
        },
        [createFolderThunk.fulfilled.type]: (state, action: PayloadAction<FolderType>) => {
            state.folders.push(action.payload as never)
        },
        [createFolderThunk.rejected.type]: (state, action: PayloadAction<errorResponse>) => {
            state.error = action.payload.message[0]
        },
        [removeFileOrFolderThunk.fulfilled.type]: (state, action: PayloadAction<{title: string, type: 'file' | 'folder', success: boolean}>) => {
            if(action.payload.success) {
                if(action.payload.type === 'folder') {
                    state.folders = state.folders.filter(folder => folder.title !== action.payload.title)
                } else {
                    state.files = state.files.filter(file => file.filename !== action.payload.title)
                }
            }
        },
        [addFilesThunk.fulfilled.type]: (state, action: PayloadAction<FileType[]>) => {
            state.error = ''
            // @ts-ignore
            state.files.push(...action.payload)
        },
        [addFilesThunk.rejected.type]: (state, action: PayloadAction<errorResponseFiles>) => {
            state.error = action.payload.message
        }
    }
})

export const fileFolderReducer = initialSlice.reducer
export const {removeError} = initialSlice.actions