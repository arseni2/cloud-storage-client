import React, {useState} from 'react';
import './styles/globals.sass'
import {AddFilesBtn} from "./components/AddFilesFolderBtn/AddFiles";
import {AddFilesDialogContent} from "./components/AddFilesDialog/AddFilesDialogContent";
import {AddFolder} from "./components/AddFilesFolderBtn/AddFolder";
import {FolderForm} from "./components/addFolderForm/FolderForm";
import {FileFolderPage} from "./pages/FileFolderPage";
import {Route, Routes} from 'react-router-dom';

function App() {
    const [isAddFiles, setIsAddFiles] = useState(false)
    const [isAddFolder, setIsAddFolder] = useState(false)
    return (
        <div style={{display: 'flex'}}>
            <Routes>
                <Route element={<FileFolderPage/>} path={'*'}/>
            </Routes>

            <AddFilesBtn setOpen={setIsAddFiles} open={isAddFiles}/>
            <AddFolder setIsAddFolder={setIsAddFolder}/>
            <AddFilesDialogContent setIsAddFiles={setIsAddFiles} isAddFiles={isAddFiles}/>
            {isAddFolder && <FolderForm isEditMode={false} setEditMode={setIsAddFolder} old_title={''} type={'folder'}/>}
        </div>
    );
}

export default App;
