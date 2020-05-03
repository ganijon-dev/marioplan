import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import AddProjectIcon from '../Icons/AddProjectIcon';
import Exit from '../Icons/Exit';
import Logo from '../Logo/Logo';
import classes from './Navbar.module.scss';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import NotificationIcon from '../Icons/NotificationIcon';
import Container from '../Container/Container';
import Notification from '../Notification/Notifications'
const Navbar = (props) => {
   
    const { signOut, profile, notifications } = props;

        let avatar;
        if (profile.imageUrl) {
           avatar =  <img src ={profile.imageUrl} className={classes['profile-image']}/>    
        }
        else if (profile.initials) {
            avatar = <div className={classes['user_initials']}>{profile.initials[0]}</div>;
        }
        
       
    
    return (
        <div className={classes["nav-wrapper"]}>
           <Container>
                <nav className={classes['nav']}>
                    <Link to ='/' className = {classes['brand-logo'] + ' ' + classes['left']}><Logo/> </Link>

                    <ul className={classes["right"]}>
                        <li className={classes['nav-item']}>
                            <NavLink to='/create' className={classes['nav-link']} activeClassName={classes["active-btn"]}>
                                <AddProjectIcon />
                                <span>Add</span>
                            </NavLink></li>
                        <li className={classes['nav-item']}>
                            <NavLink to='/' className={classes['nav-link']}>  
                                
                                <NotificationIcon/>
                                <span>Notifications</span>
                                
                            </NavLink>
                        </li>
                        {/* <Notification notifications ={notifications}/> */}
                        <li className={classes['nav-item']}>
                            <NavLink to='/' className={classes['nav-link']} onClick= {signOut} >
                                <Exit  />
                                <span>Logout</span>
                            </NavLink>
                        </li>
                        <li className={classes['nav-item']} >
                            <NavLink to='/' className={classes['profile-link']} >
                                {avatar}
                            </NavLink>
                        </li>
                    </ul>
                
                </nav>
                   
           </Container>
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
        profile: state.firebase.profile,
        notifications: state.firestore.data.notifications
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);