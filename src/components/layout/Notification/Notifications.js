import React from 'react';
import moment from 'moment';
import { NotificationLoader } from '../../loader/NotificationLoader';
import classes from './Notifications.module.scss'
const Notifications = (props) => {
    const {notifications} = props ;
   
    return (
       <div className= {classes['notification-wrapper']}>
           <div className={classes['notification-title']}>Notifications</div>
           {notifications ? Object.keys(notifications).map(key => {
                return (<div className={classes['notification-item']}>
                     <span className={classes['user-name']}>{notifications[key].user}</span>
                     <span className={classes['desc']}> {notifications[key].content}</span>
                 </div>) }):null}
        </div>
    )
}
export default Notifications;
