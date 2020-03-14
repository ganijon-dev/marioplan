import React from 'react'
import ProjectSummary from './ProjectSummary';
const ProjectList = () => {
    const a = [2,3,4,5];
    const renderItems = a.forEach(element => {
       return <ProjectSummary/>
    });
    return (
        <div className="project-list section">
            
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
           
        </div>
        
    );
};

export default ProjectList;