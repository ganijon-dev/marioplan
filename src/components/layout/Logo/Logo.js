import React from 'react';

import classes from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={classes["logo"]}>
            <span className={classes['logo__main-name']}>Mario</span>
            <span className={classes['logo__second-name']}> Plan</span>
        </div>
    )
}

export default Logo ; 