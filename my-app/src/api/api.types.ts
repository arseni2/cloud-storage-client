export type FolderType = {
    id: number
    title: string
}

export type FileType = {
    id: number
    filename: string
    mimetype: string
    //folder: FolderType
}

export type renameFileOrFolderParams = {
    old_title: string
    new_title: string
}

export type getFileFoldersResponse = {
    files: FileType[] | []
    folders: FolderType[] | []
}

export type createFolderParams = {
    title: string
    parent_title: string | null
}

export type errorResponseFiles = {
    statusCode: number
    message: string
}

export type errorResponse = {
    statusCode: number
    message: string[]
    error: string
}

export type removeFileOrFolderParams = {
    type: 'folder' | 'file'
    title: string
}

export type removeFileOrFolderResponse = {
    raw: any[]
    affected: 0 | 1
}