import React from 'react';
import {Dialog} from "../../layouts/DialogWindowLayout/Dialog";
import folder_img from '../../assets/image/folder.png'
import styles from './MoveFolderFileDialog.module.sass'
import {Input} from "../../share-components/input/Input";

type PropsType = {
    isOpen: boolean
    setOpen: (open: boolean) => void
}
export const MoveFolderFileDialog = ({isOpen, setOpen}: PropsType) => {
    return (
        <Dialog setOpen={setOpen} open={isOpen}>
            <div className={styles.content}>
                <img src={folder_img} alt="folder"/>
                <Input type="text" placeholder={'введите называние папки'} className={styles.input}/>
            </div>
        </Dialog>
    );
};
