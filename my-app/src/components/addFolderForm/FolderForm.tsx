import React, {useState} from 'react';
import folder from '../../assets/image/folder.png'
import file from '../../assets/image/file.png'
import {Input} from "../../share-components/input/Input";

type PropsType = {
    setEditMode: (edit: boolean) => void
    folderTitle: string
    type: 'folder' | 'file'
}
export const FolderForm = (props: PropsType) => {
    const [folderTitle, setFolderTitle] = useState(props.folderTitle)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFolderTitle(e.target.value)
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log(folderTitle) //will be save to server folder title
            props.setEditMode(false)
        }
        if (e.key === 'Escape') {
            props.setEditMode(false)
        }
    }
    console.log('RERENDER FolderForm')
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: props.folderTitle ? 0 : 30
        }}>
            <img src={props.type === 'folder' ? folder : file} alt="folder"/>
            <Input autoFocus value={folderTitle} onChange={onChange} type="text"
                   onKeyDown={onKeyDown}/>
        </div>
    );
};
