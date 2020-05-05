import React from 'react';

import classes from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={classes["logo"]}>
            <span className={classes['logo__main-name']}>GT</span>
            <span className={classes['logo__second-name']}>Posts</span>
        </div>
    )
}

export default Logo ; 