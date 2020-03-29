import React from 'react';
import Skeleton from 'react-loading-skeleton';


export const NotificationLoader = () => {
    return (
        <div>
            <Skeleton width={200}/><br/>
            <Skeleton width={80}/><br/>
            <Skeleton width={200}/><br/>
            <Skeleton width={80}/><br/>
            <Skeleton width={200}/><br/>
            <Skeleton width={80}/><br/>
            <Skeleton width={200}/><br/>
            <Skeleton width={80}/><br/>
            <Skeleton width={200}/><br/>
            <Skeleton width={80}/>

            
        </div>
    )
}

export default NotificationLoader;