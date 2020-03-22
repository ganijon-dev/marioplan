import React from 'react';
import { Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
const Navbar = (props) => {
    const { user , profile } = props;
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to ='/' className = 'brand-logo left'> MarioPlan </Link>
                
                {(user.uid && profile) ? <SignedInLinks profile ={profile}/> :<SignedOutLinks/> }
                
                
            </div>
        </nav>  
    )
}

const mapStateToProps = state => {
    
    return {
        user: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);