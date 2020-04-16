import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link} from 'react-router-dom';


const ProjectList = ({ projects}) => {
    const noImage = `https://firebasestorage.googleapis.com/v0/b/gtmarioplan.appspot.com/o/images%2FNo_picture_available.png?alt=media&token=3df7c973-049b-412b-bd48-683fd03b3938`
    const projectItems = projects.map(project => {
        return (
         <Link to= {'project/' + project.id} key={project.id}><ProjectSummary project = {project} noImage = {noImage}/></Link>
        ) 
     })
    return (

        <div className="project-list">
            
            {projectItems}
            
        </div>
        
    );
};

export default ProjectList;