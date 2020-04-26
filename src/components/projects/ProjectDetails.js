import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import AuthorIcon from '../layout/Icons/AuthorIcon';
import TimeIcon from '../layout/Icons/TimeIcon';
import './ProjectDetails.scss';
import moment from 'moment';
import Container from '../layout/Container/Container';


const ProjectDetails = (props) => {
    
    const {project, user} = props ;
    if (!user.uid) return <Redirect to= '/signin'/>
    if (project) {
        return (
            <Container>
                <div className="image-container">
                    <img src={project.image} alt="image"/>
                </div>
                
                <div className="project-details">
                <div className="project-details_card">
                    <div className="card-header">
        <h2 className="card-title"> {project.title}</h2>
        
        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                    <div className="card-footer">
                    <p className="card-author"><AuthorIcon/> <span> {project.authorFirstName  + ' ' + project.authorLastName}</span></p>
                    <p className="card-timestamp"><TimeIcon/><span>{moment(project.createdAt.toDate()).calendar()}</span></p>
                    </div>
                    </div>
                </div>
                </div>
            </Container>
        )
    }
    return null;
    
}

const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;

    const projects = state.firestore.data.projects;
    const project = projects ? projects[id]: null;
   
    return {
        project :project,
        user:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])

) (ProjectDetails);


