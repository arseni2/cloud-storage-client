import React from 'react'
import folder from '../../assets/image/folder.png'
import styles from './Folder.module.sass'
import {FileFolderLayout} from "../../layouts/FileFolderLayout/FileFolderLayout";
import {FolderType} from "../../api/api.types";

export const Folder = React.memo((props: FolderType) => {
    return (
        <FileFolderLayout type={'folder'} title={props.title}>
            <img src={folder} alt='folder' className={styles.folder_image}/>
            <p className={styles.folder_title}>
                {props.title}
            </p>
        </FileFolderLayout>
    )
})