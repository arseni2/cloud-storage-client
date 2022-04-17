import React, {useCallback, useState} from 'react';
import classNames from "classnames";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import OutsideClickHandler from "react-outside-click-handler";
import styles from './FileFolderLayout.module.sass'
import {FolderForm} from "../../components/addFolderForm/FolderForm";
import {MoveFolderFileDialog} from "../../components/MoveFolderFileDialog/MoveFolderFileDialog";

type PropsType = {
    children: any
    type: 'folder' | 'file'
    title: string
}
export type CordsType = {
    x: number
    y: number
}
export const FileFolderLayout = React.memo((props: PropsType) => {
    const [isContainerClick, setIsContainerClick] = useState(false)
    const [contextMenuClick, setContextMenuClick] = useState<null | CordsType>(null)

    const [isEditMode, setEditMode] = useState(false)
    const [isMove, setMove] = useState(false)

    const onOutsideClick = useCallback(() => {
        setIsContainerClick(false)
        setContextMenuClick(null)
        setEditMode(false)
    }, [])
    const onClick = useCallback(() => {
        setIsContainerClick(true)
        setContextMenuClick(null)
    }, [])
    const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        onClick()
        setContextMenuClick({x: e.clientX, y: e.clientY})
    }
    return (
        <OutsideClickHandler display={'contents'} onOutsideClick={onOutsideClick}>
            <div
                onContextMenu={onContextMenu}
                onClick={onClick}
                className={classNames(styles.container, {[styles.container_selected]: isContainerClick})}
                style={{width: 150}}
            >
                {isEditMode ?
                    <FolderForm isEditMode={true} type={props.type} old_title={props.title}
                                setEditMode={setEditMode}/> : props.children}
            </div>
            <MoveFolderFileDialog setOpen={setMove} isOpen={isMove}/>
            {contextMenuClick && <ContextMenu title={props.title} type={props.type} setContextMenuClick={setContextMenuClick}
                                              setMove={setMove}
                                              cords={contextMenuClick}
                                              setEditMode={setEditMode}/>}
        </OutsideClickHandler>
    );
})
