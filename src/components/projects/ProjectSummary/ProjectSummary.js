import React from 'react'
import moment from 'moment';
import AuthorIcon from '../../layout/Icons/AuthorIcon';
import TimeIcon from '../../layout/Icons/TimeIcon';
import classes from './ProjectSummary.module.scss'
const ProjectSummary = ({ project, noImage }) => {

    
   
    return (
        <div className={classes["card"]}>

            <div className={classes["card-image__wrapper"]}>
                    <img src={project.image}  alt=""/>
            </div>
            <div className={classes["card-body"]}>
                <h3>{project.title}</h3>
                <p className={classes["small"]}>{project.content}</p>
                <div className={classes["card-footer"]}>
                <p className={classes["card-author"]}><AuthorIcon/> <span> {project.authorFirstName  + ' ' + project.authorLastName}</span></p>
                <p className={classes["card-timestamp"]}><TimeIcon/><span>{moment(project.createdAt.toDate()).calendar()}</span></p>
                </div>
                <div className={classes["go-corner"]} href="#">
                    <div className={classes["go-arrow"]}>
                        →
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default ProjectSummary

