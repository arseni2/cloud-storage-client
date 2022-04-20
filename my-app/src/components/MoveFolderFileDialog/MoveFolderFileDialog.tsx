import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Dialog} from "../../layouts/DialogWindowLayout/Dialog";
import folder_img from '../../assets/image/folder.png'
import styles from './MoveFolderFileDialog.module.sass'
import {Input} from "../../share-components/input/Input";
import {useDispatch} from "react-redux";
import {moveToFolderThunk} from "../../redux/reducers/FileFolderReducer";

type PropsType = {
    isOpen: boolean
    setOpen: (open: boolean) => void
    type: 'file' | 'folder'
    title: string
}
export const MoveFolderFileDialog = ({isOpen, setOpen, type, title}: PropsType) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            dispatch(moveToFolderThunk({title, type, title_placed: text}))
            setOpen(false)
        }
    }
    return (
        <Dialog setOpen={setOpen} open={isOpen}>
            <div className={styles.content}>
                <img src={folder_img} alt="folder"/>
                <Input
                    onKeyDown={onKeyDown}
                    type="text"
                    placeholder={'введите называние папки'}
                    onChange={onChange}
                    value={text}
                    className={styles.input}/>
            </div>
        </Dialog>
    );
};
