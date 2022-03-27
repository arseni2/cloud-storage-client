import React from 'react';
import styles from './Dialog.module.sass'
import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";

type PropsType = {
    open: boolean
    setOpen: (open: boolean) => void
    children: any
}
export const Dialog = (props: PropsType) => {
    const onOutsideClick = () => props.setOpen(false)
    return (
        <div className={classNames({[styles.dialog]: true, [styles.none]: !props.open})}>
            <OutsideClickHandler onOutsideClick={onOutsideClick}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </OutsideClickHandler>
        </div>
    );
};
