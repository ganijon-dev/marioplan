import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    //console.log(props);
    const { signOut, profile } = props;
    
    return (
        <ul className="right">
            <li><NavLink to='/create' className='nav' activeClassName='active-btn'>New Project</NavLink></li>
            <li><NavLink to='/' className='nav' activeClassName='active-btn' onClick= {signOut}>Log Out</NavLink></li>
    <li><NavLink to='/' className='btn btn-floating blue lighten-1' >{profile.initials}</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        signOut : () => dispatch (signOut())
    }
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        user: state,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);
