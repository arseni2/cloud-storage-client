import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './AddFilesDialogContent.module.sass'
import {Dialog} from "../../layouts/DialogWindowLayout/Dialog";
import {useDispatch, useSelector} from "react-redux";
import {addFilesThunk} from "../../redux/reducers/FileFolderReducer";
import {getErrorMessage} from "../../redux/selectors/FileFolderReducerSelectors";

type PropsType = {
    isAddFiles: boolean
    setIsAddFiles: (isAddFiles: boolean) => void
}
export const AddFilesDialogContent = ({isAddFiles, setIsAddFiles}: PropsType) => {
    const dispatch = useDispatch()
    const error = useSelector(getErrorMessage)
    const [files, setFiles] = useState<null | FileList>(null)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setFiles(e.target.files)
    useEffect(() => {
        if(files) {
            dispatch(addFilesThunk(files))
        }
    }, [files])
    useEffect(() => {error && alert(error)}, [error])
    return (
        <Dialog open={isAddFiles} setOpen={setIsAddFiles}>
            <div className={'dialog_content'}>
                <p className={styles.content_title}>
                    Add Files
                </p>
                <div className={styles.content_dropzone}>
                    <input onChange={onChange} className={styles.content_dropzone_input} type="file" multiple/>
                </div>
            </div>
        </Dialog>
    );
};
