import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className={'nav' + ' ' + 'row'}>
            <img src={require('../imgs/log.png')}/>
            <NavLink to='/home' activeClassName={'active'}>Home</NavLink>
            <NavLink to='/services' activeClassName={'active'}>Services</NavLink>
            <NavLink to='/profile' activeClassName={'active'}>Profile</NavLink>
            <div className={'sign'}>
                <NavLink to='/signIn' activeClassName={'active'}>Sign In</NavLink>
                <NavLink to='/signUp' activeClassName={'active'}>Sign Up</NavLink>
            </div>
        </nav>
    )
};

export default Header;