import React from 'react';
import styles from './ContextMenu.module.sass';

type PropsType = {
    text: string
    icon: string
    callback: (value: boolean) => void
}
const ContextMenuItem = ({icon, text, callback}: PropsType) => {
    return (
        <div className={styles.context_menu_item} onClick={() => {
            callback(true)
        }}>
            <img src={icon} alt="icon" className={styles.context_menu_img}/>
            <p className={styles.context_menu_text}>
                {text}
            </p>
        </div>
    );
};

export default React.memo(ContextMenuItem);