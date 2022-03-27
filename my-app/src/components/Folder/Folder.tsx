import React from 'react'
import folder from '../../assets/image/folder.png'
import styles from './Folder.module.sass'
import {FileFolderLayout} from "../../layouts/FileFolderLayout/FileFolderLayout";

export const Folder = React.memo((props: any) => {
    return (
        <FileFolderLayout type={styles.folder}>
            <img src={folder} alt='folder' className={styles.folder_image}/>
            <p className={styles.folder_title}>
                music
            </p>
        </FileFolderLayout>
    )
})