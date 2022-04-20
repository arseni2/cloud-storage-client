import React, {useState} from 'react';
import folder from '../../assets/image/folder.png'
import file from '../../assets/image/file.png'
import {Input} from "../../share-components/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {
    createFolderThunk,
    removeError,
    renameFileThunk,
    renameFolderThunk
} from "../../redux/reducers/FileFolderReducer";
import {getErrorMessage} from "../../redux/selectors/FileFolderReducerSelectors";
import {getFromUrlLastWord} from "../../utils/utils";
import {useLocation} from "react-router-dom";

type PropsType = {
    setEditMode: (edit: boolean) => void
    old_title: string
    type: 'folder' | 'file'
    isEditMode: boolean
}
export const FolderForm = (props: PropsType) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const errorCreateFolder = useSelector(getErrorMessage)
    const [title, setTitle] = useState(props.old_title)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if(props.isEditMode) {
                props.type === 'folder'
                    ? dispatch(renameFolderThunk({new_title: title, old_title: props.old_title}))
                    : dispatch(renameFileThunk({new_title: title, old_title: props.old_title}))
            } else {
                 const folder_parent = getFromUrlLastWord(location.pathname)
                dispatch(createFolderThunk({title, parent_title: folder_parent || null}))
            }
        }
        if (e.key === 'Escape') {
            // @ts-ignore
            dispatch(removeError())
            props.setEditMode(false)
        }
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: props.old_title ? 0 : 30
        }}>
            <img src={props.type === 'folder' ? folder : file} alt="folder"/>
            <Input autoFocus value={title} onChange={onChange} type="text"
                   onKeyDown={onKeyDown}/>
            <p style={{color: 'red'}}>
                {errorCreateFolder && errorCreateFolder}
            </p>
        </div>
    );
}
