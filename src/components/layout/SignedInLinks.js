import React from 'react';
import { NavLink } from 'react-router-dom';
import Exit from './Exit';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import AddProjectIcon from './AddProjectIcon';

const SignedInLinks = (props) => {
    
    const { signOut, profile } = props;
    
    return (
        <ul className="right">
            <li><NavLink to='/create' className='nav' activeClassName='active-btn'><AddProjectIcon/></NavLink></li>
    <li><NavLink to='/' className='nav' onClick= {signOut}><Exit/></NavLink></li>
    <li><NavLink to='/' className='' >{profile.initials}</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        signOut : () => dispatch (signOut())
    }
}

const mapStateToProps = state => {
    
    return {
        user: state,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);
