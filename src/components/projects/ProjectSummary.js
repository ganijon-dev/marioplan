import React from 'react'
import moment from 'moment';
import './ProjectSummary.scss';
import AuthorIcon from '../layout/Icons/AuthorIcon';
import TimeIcon from '../layout/Icons/TimeIcon';

const ProjectSummary = ({ project, noImage }) => {

   
    return (
        <div className="card">

            <div className="card-image__wrapper">
                    <img src={project.image}  alt=""/>
            </div>
            <div className="card-body">
                <h3>{project.title}</h3>
                <p className="small">{project.content}</p>
                <div className="card-footer">
                <p className="card-author"><AuthorIcon/> <span> {project.authorFirstName  + ' ' + project.authorLastName}</span></p>
                <p className="card-timestamp"><TimeIcon/><span>{moment(project.createdAt.toDate()).calendar()}</span></p>
                </div>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default ProjectSummary

