import React, {InputHTMLAttributes} from 'react';
import styles from "./Input.module.sass";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const {className, ...otherProps} = props
    return <input className={`${styles.input} ${className}`} {...otherProps}/>
};
