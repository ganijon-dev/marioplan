import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup' className='nav' activeClassName='active-btn'>Sign Up</NavLink></li>
            <li><NavLink to='/signin' className='nav'activeClassName='active-btn' >Log In</NavLink></li>
           
        </ul>
    );
}

export default SignedOutLinks;
