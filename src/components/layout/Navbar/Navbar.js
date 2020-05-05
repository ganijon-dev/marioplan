import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom';
import AddProjectIcon from '../Icons/AddProjectIcon';
import Exit from '../Icons/Exit';
import Logo from '../Logo/Logo';
import classes from './Navbar.module.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { signOut } from '../../../store/actions/authActions';
import NotificationIcon from '../Icons/NotificationIcon';
import Container from '../Container/Container';
import Notification from '../Notification/Notifications'

class Navbar extends Component {
    state = {
        openNotifications : false,
    }

    toggleNotification = (event)=> {
        
        const {openNotifications} = this.state ;
        
        this.setState({
            openNotifications:!openNotifications
        })
        event.stopPropagation();
        event.preventDefault();
        
    }
    
    componentDidMount() {
       
        window.addEventListener('click', (event) => {
            
            if (this.state.openNotifications && !event.target.closest('#notifications')){
                this.setState({
                    openNotifications:false
                })
            } 
        })
    }
   
    render() {
        const { signOut, profile, notifications } = this.props;
        let avatar;
        if (profile.imageUrl) {
        avatar =  <img src ={profile.imageUrl} className={classes['profile-image']} alt="Something"/>    
        }
        else if (profile.initials) {
            avatar = <div className={classes['user_initials']}>{profile.initials[0]}</div>;
        }
        
        return (

                <div className={classes["nav-wrapper"]}>
                   <Container>
                        <nav className={classes['nav']}>
                            <Link to ='/' className = {classes['brand-logo']}><Logo/> </Link>
        
                            <ul className={classes["right"]}>
                                <li className={classes['nav-item']}>
                                    <NavLink to='/create' className={classes['nav-link']} activeClassName={classes["active-btn"]}>
                                        <AddProjectIcon />
                                        <span>Add</span>
                                    </NavLink></li>
                                <li className={classes['nav-item']}>
                                    <NavLink to='/#notification' className={classes['nav-link']} onClick={this.toggleNotification} >  

                                        <NotificationIcon/>
                                        <span>Notifications</span>
                                        
                                    </NavLink>
                                </li>
                                
                                {this.state.openNotifications ?  <Notification notifications ={notifications} />:null }
                               
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
        notifications: state.firestore.ordered.notifications
    }
}


export default compose(
    firestoreConnect([
      { collection: 'notifications', limit:5, orderBy: ['time', 'desc']}
    ]),
    connect(mapStateToProps,mapDispatchToProps )
  )(Navbar);