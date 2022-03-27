import React from 'react';
import {Folder} from "../components/Folder/Folder";
import {File} from "../components/File/File";
import {useLocation} from "react-router-dom";
import {getFromUrlLastWord} from "../utils/utils";

export const FileFolderPage = React.memo((props: any) => {
    const location = useLocation()
    const last = getFromUrlLastWord(location.pathname)
    console.log(last)
    return (
        <div style={{display: 'flex'}}>
            <Folder />
            <Folder />
            <File />
            <File />
        </div>
    );
})
