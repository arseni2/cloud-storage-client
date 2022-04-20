import {instance} from "./axios.config";
import {
    createFolderParams, errorResponseFiles,
    FileType,
    FolderType,
    getFileFoldersResponse, getFolderChildrenParams, moveToFolderParams,
    removeFileOrFolderParams, removeFileOrFolderResponse,
    renameFileOrFolderParams
} from "./api.types";


export const getFolderFiles = (): Promise<getFileFoldersResponse> => {
    return instance.get('cloud/all').then(res => res.data)
}

export const renameFolder = (payload: renameFileOrFolderParams): Promise<FolderType> => {
    const { old_title, new_title } = payload
    return instance.patch(`folder/update/${old_title}`, {title: new_title}).then(res => res.data)
}

export const renameFile = (payload: renameFileOrFolderParams): Promise<FileType> => {
    const { old_title, new_title } = payload
    return instance.patch(`file/update/${old_title}`, {title: new_title}).then(res => res.data)
}

export const createFolder = (payload: createFolderParams): Promise<FolderType> => {
    return instance.post('folder/create', {...payload}).then(res => res.data)
}

export const removeFileOrFolder = (payload: removeFileOrFolderParams): Promise<removeFileOrFolderResponse> => {
    const {type, title} = payload
    const url = type === 'folder' ? `folder/delete/${title}` : `file/delete/${title}`
    return instance.delete(url).then(res => res.data)
}

export const addFiles = (files: FileList): Promise<FileType[]> => {
    const formData = new FormData()
    Array.from(files).map(file => {
        formData.append(file.name, file)
    })
    return instance.post('file/upload', formData).then(res => res.data)
}

export const moveToFolder = (payload: moveToFolderParams): Promise<FileType | FolderType | errorResponseFiles> => {
    const {type, title, title_placed} = payload
    const url = type === 'folder' ? 'folder/move' : 'file/move'
    return instance.post(url, {title, title_placed}).then(res => res.data)
}

export const getFolderChildren = (folder_title: string): Promise<getFileFoldersResponse> => {
    return instance.get(`folder/detail/${folder_title}`).then(res => res.data)
}