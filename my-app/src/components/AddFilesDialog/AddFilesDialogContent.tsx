import React from 'react';
import styles from './AddFilesDialogContent.module.sass'
import {Dialog} from "../../layouts/DialogWindowLayout/Dialog";

type PropsType = {
    isAddFiles: boolean
    setIsAddFiles: (isAddFiles: boolean) => void
}
export const AddFilesDialogContent = ({isAddFiles, setIsAddFiles}: PropsType) => {
    return (
        <Dialog open={isAddFiles} setOpen={setIsAddFiles}>
            <div className={'dialog_content'}>
                <p className={styles.content_title}>
                    Add Files
                </p>
                <div className={styles.content_dropzone}>
                    <input className={styles.content_dropzone_input} type="file" multiple/>
                </div>
            </div>
        </Dialog>
    );
};
