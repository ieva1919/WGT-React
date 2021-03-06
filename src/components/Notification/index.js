import * as React from 'react'
import './index.scss'
import close from '../../assets/close.svg';
import succes from '../../assets/succes.svg';
import error from '../../assets/error.svg';
import info from '../../assets/info.svg';

export const Notification = (props) => {
    let classes = `notification notification-${props.type}`
    return <div className={classes}>
        {props.type === 'success' && <img src={succes} alt="succes" />}
        {props.type === 'error' && <img src={error} alt="error" />}
        {props.type === 'info' && <img src={info} alt="info" />}
        {props.children}
        <img src={close} alt="close" />
    </div>
}