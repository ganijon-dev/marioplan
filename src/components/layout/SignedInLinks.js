import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/' className='nav'>New Project</NavLink></li>
            <li><NavLink to='/' className='nav'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>GT</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;
