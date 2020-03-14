import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/' className='nav'>Sign Up</NavLink></li>
            <li><NavLink to='/' className='nav'>Log In</NavLink></li>
           
        </ul>
    );
}

export default SignedOutLinks;
