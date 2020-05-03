import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Navbar from './components/layout/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails/ProjectDetails';
import SignIn from './components/auth/SignIn/SignIn';
import SignUp from './components/auth/SignUp/SignUp';
import CreateProject from './components/projects/CreateProject/CreateProject';

class App extends Component {

    render() {
        const userID = this.props.user.uid;
        return ( <BrowserRouter >
                    <div className = "App" > 
                    { userID ? < Navbar /> : null } 
                    <Switch >
                        <Route exact path = '/' component = { Dashboard }/> 
                        <Route path = '/project/:id' component = { ProjectDetails }/> 
                        <Route path = '/signin' component = { SignIn }/> 
                        <Route path = '/signup' component = { SignUp }/> 
                        <Route path = '/create' component = { CreateProject }/> 
                        </Switch>

                    </div > 
                </BrowserRouter>
        );
    };
}

const mapStateToProps = state => {

    return {
        user: state.firebase.auth,

    }
}

export default connect(mapStateToProps)(App);