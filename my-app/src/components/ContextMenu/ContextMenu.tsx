import React, {useState} from 'react';
import styles from './ContextMenu.module.sass'
import ContextMenuItem from "./ContextMenuItem";
import penIcon from "../../assets/icons/pen_icon.png";
import trashIcon from "../../assets/icons/trash_icon.png"
import downloadIcon from "../../assets/icons/download_icon.png"
import moveIcon from "../../assets/icons/move_to_folder_icon.png"
import {CordsType} from "../../layouts/FileFolderLayout/FileFolderLayout";

type PropsType = {
    cords: CordsType
    setEditMode: (edit: boolean) => void
    setMove: (isMove: boolean) => void
    setContextMenuClick: (cords: null | CordsType) => void
}
const ContextMenu = (props: PropsType) => {
    const [isRemove, setRemove] = useState(false)
    const [isDownload, setDownload] = useState(false)
    return (
        <div className={styles.context_menu} style={{top: props.cords.y, left: props.cords.x}}
             onClick={() => props.setContextMenuClick(null)}>
            <ContextMenuItem text={'Rename'} icon={penIcon} callback={props.setEditMode}/>
            <ContextMenuItem text={'Download'} icon={downloadIcon} callback={setDownload}/>
            <ContextMenuItem text={'Move'} icon={moveIcon} callback={props.setMove}/>
            <ContextMenuItem text={'Remove'} icon={trashIcon} callback={setRemove}/>
        </div>
    );
};

export default React.memo(ContextMenu);