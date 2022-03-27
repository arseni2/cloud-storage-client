import React from 'react';
import add_icon from '../../assets/icons/add_icon.png'
import styles from './Button.module.sass'

type PropsType = {
    open: boolean
    setOpen: (open: boolean) => void
}
export const AddFilesBtn = React.memo((props: PropsType) => {
    const onClick = () => props.setOpen(!props.open)
    return (
        <div className={styles.btn} onClick={onClick}>
            <img src={add_icon} alt="add" className={styles.btn_icon}/>
        </div>
    );
})
