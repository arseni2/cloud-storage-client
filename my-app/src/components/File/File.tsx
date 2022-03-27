import React from 'react';
import {FileFolderLayout} from "../../layouts/FileFolderLayout/FileFolderLayout";
import file from "../../assets/image/file.png";
import styles from '../Folder/Folder.module.sass'

export const File = React.memo((props: any) => {
    return (
        <FileFolderLayout type={'file'}>
            <img src={file} alt='file' className={styles.folder_image}/>
            <p className={styles.folder_title}>
                file
            </p>
        </FileFolderLayout>
    );
})
