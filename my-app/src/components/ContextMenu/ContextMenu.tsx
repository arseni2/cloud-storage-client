import React, {useState} from 'react';
import styles from './ContextMenu.module.sass'
import ContextMenuItem from "./ContextMenuItem";
import penIcon from "../../assets/icons/pen_icon.png";
import trashIcon from "../../assets/icons/trash_icon.png"
import downloadIcon from "../../assets/icons/download_icon.png"
import moveIcon from "../../assets/icons/move_to_folder_icon.png"
import {CordsType} from "../../layouts/FileFolderLayout/FileFolderLayout";
import {useDispatch} from "react-redux";
import {removeFileOrFolderThunk} from "../../redux/reducers/FileFolderReducer";

type PropsType = {
    cords: CordsType
    setEditMode: (edit: boolean) => void
    setMove: (isMove: boolean) => void
    setContextMenuClick: (cords: null | CordsType) => void
    title: string
    type: 'file' | 'folder'
}
const ContextMenu = (props: PropsType) => {
    const dispatch = useDispatch()
    const closeContextMenu = () => props.setContextMenuClick(null)
    const [isRemove, setRemove] = useState(false)
    const [isDownload, setDownload] = useState(false)
    React.useEffect(() => {
        if (isRemove) {
            dispatch(removeFileOrFolderThunk({title: props.title, type: props.type}))
        }
    }, [isRemove])
    if (isRemove || isDownload) closeContextMenu()
    return (
        <div className={styles.context_menu} style={{top: props.cords.y, left: props.cords.x}}>
            <ContextMenuItem text={'Rename'} icon={penIcon} callback={props.setEditMode}/>
            <ContextMenuItem text={'Download'} icon={downloadIcon} callback={setDownload}/>
            <ContextMenuItem text={'Move'} icon={moveIcon} callback={props.setMove}/>
            <ContextMenuItem text={'Remove'} icon={trashIcon} callback={setRemove}/>
        </div>
    );
};

export default React.memo(ContextMenu);