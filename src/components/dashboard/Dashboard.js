import React, { Component, Fragment } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import DashboardLoader from '../loader/DashboardLoader';
import Container from '../layout/Container/Container';


class Dashboard extends Component {
    
    render() {
        const { user , notifications, projects} = this.props;
        if (!user.uid) return <Redirect to= '/signin'/> 
        return (
                 
            <Container>
                {projects ? <ProjectList projects = {projects} /> : <DashboardLoader/>}         
            </Container>
           
        )
    }
}

const mapStateToProps = state =>{

    return {
        projects: state.firestore.ordered.projects,
        user: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,

    }
}


export default compose(
    firestoreConnect([
      { collection: 'projects',orderBy: ['createdAt', 'desc'] },
      { collection: 'notifications', limit:5, orderBy: ['time', 'desc']}
    ]),
    connect(mapStateToProps)
  )(Dashboard);