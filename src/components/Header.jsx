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
        </nav>
    )
};

export default Header;