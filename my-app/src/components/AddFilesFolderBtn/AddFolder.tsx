import React from 'react';
import styles from './Button.module.sass'
import new_folder from '../../assets/icons/new_folder.png'

type PropsType = {
    setIsAddFolder: (isAddFolder: boolean) => void
}

export const AddFolder = React.memo((props: PropsType) => {
    console.log('addFOlder rerender')
    return (
        <div className={`${styles.btn} ${styles.folder_btn}`} onClick={() => {props.setIsAddFolder(true)}}>
            <img src={new_folder} alt="new folder" className={styles.btn_icon}/>
        </div>
    );
})
