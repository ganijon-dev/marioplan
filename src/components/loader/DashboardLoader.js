import React from 'react';
import Skeleton from "react-loading-skeleton";
import classes from '../projects/ProjectSummary/ProjectSummary.module.scss'
export const DashboardLoader = () => {
    return (
            <div className={classes["card"]}>

                <div className={classes["card-image__wrapper"]}>
                    <Skeleton  height={200}/> 
                </div>
                <div className={classes["card-body"]}>
                    <div style={{height:"48px"}}>
                        <Skeleton height={20} width={250}/>
                    </div>
                    <Skeleton height={30}/>
                    <div className={classes["card-footer"]}>
                        <Skeleton height={15}  width={130}/>
                        <Skeleton height={15}  width={130}/>
                    </div>         
                </div>
            </div>     
      
    )
}

export default DashboardLoader;