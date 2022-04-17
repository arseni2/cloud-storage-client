import React from 'react';
import {FileFolderLayout} from "../../layouts/FileFolderLayout/FileFolderLayout";
import file from "../../assets/image/file.png";
import styles from '../Folder/Folder.module.sass'
import {FileType} from "../../api/api.types";

export const File = React.memo((props: FileType) => {
    return (
        <FileFolderLayout type={'file'} title={props.filename}>
            <img src={file} alt='file' className={styles.folder_image}/>
            <p className={styles.folder_title} >
                {props.filename}
            </p>
        </FileFolderLayout>
    );
})
