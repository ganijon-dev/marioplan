import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const DashboardLoader = () => {
    return (
        <div className='section'>  
            <SkeletonTheme color="white">
                <Skeleton count={6} height={129.33}/> 
            </SkeletonTheme>   
                   
        </div>
    )
}

export default DashboardLoader;