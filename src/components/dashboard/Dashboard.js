import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import DashboardLoader from '../loader/DashboardLoader';
import Container from '../layout/Container/Container';


class Dashboard extends Component {
    
    render() {
        const { user , projects} = this.props;
        
        if (!user.uid) return <Redirect to= '/signin'/> 
        
        return (
            
            <Container>
              
                {projects  ? <ProjectList projects = {projects} /> : (<div className='project-list'>
                {Array(8).fill().map(item => {
                    return <DashboardLoader/>})
                }
                </div>)}         
                
            </Container>
        )
    }
}

const mapStateToProps = state =>{
    
    return {
        projects: state.firestore.ordered.projects,
        user: state.firebase.auth,

    }
}


export default compose(
    firestoreConnect([
      { collection: 'projects',orderBy: ['createdAt', 'desc'] },
    ]),
    connect(mapStateToProps)
  )(Dashboard);