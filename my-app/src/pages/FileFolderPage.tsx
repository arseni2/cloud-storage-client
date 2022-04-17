import React, {useEffect} from 'react';
import {Folder} from "../components/Folder/Folder";
import {File} from "../components/File/File";
import {useLocation} from "react-router-dom";
import {getFromUrlLastWord} from "../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {getFolderFileThunk} from "../redux/reducers/FileFolderReducer";
import {getFilesSelector, getFoldersSelector, getLoadingSelector} from "../redux/selectors/FileFolderReducerSelectors";

export const FileFolderPage = React.memo((props: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFolderFileThunk())
    }, [])
    const location = useLocation()
    const last = getFromUrlLastWord(location.pathname)
    console.log(last)
    const folders = useSelector(getFoldersSelector)
    const files = useSelector(getFilesSelector)
    const loading = useSelector(getLoadingSelector)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {loading && <h1>Loading...</h1>}
            {folders.map((folder, i) => {
                return <Folder key={i} {...folder} />
            })}
            {files.map((file, i) => {
                return <File key={i} {...file} />
            })}
        </div>
    );
})
