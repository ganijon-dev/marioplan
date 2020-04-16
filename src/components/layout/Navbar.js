import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import AddProjectIcon from './AddProjectIcon';
import Exit from './Exit';
import Logo from './Logo';
import './Navbar.scss';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import NotificationIcon from './NotificationIcon';
const Navbar = (props) => {
   
    const { signOut, profile } = props;
    
    return (
        <div className="nav-wrapper grey darken-3">
            <div className="container">
                <nav className='nav'>
                <Link to ='/' className = 'brand-logo left'><Logo/> </Link>

                <ul className="right">
                    <li className='nav-item'>
                        <NavLink to='/create' className='nav' activeClassName='active-btn'>
                            <AddProjectIcon className='nav-item__icon'/>
                            <span>Add</span>
                        </NavLink></li>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav'>  
                            <NotificationIcon className='nav-item__icon'/>
                            <span>Notifications</span>
                        </NavLink>
                        
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav' onClick= {signOut} >
                            <Exit  />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                    <li className='nav-item user_initials' >
                        <NavLink to='/' >{profile.initials ? profile.initials[0]:""}</NavLink>
                    </li>
        </ul>
                
                </nav>
                
                
                
            </div>
        </div>  
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut : () => dispatch (signOut())
    }
}

const mapStateToProps = state => {
    
    return {
        user: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);