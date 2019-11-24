import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={'nav' + ' ' + 'row'}>
                <img src={require('../imgs/log.png')}/>
                <NavLink to='/home' activeClassName={'active'}>Home</NavLink>
                <NavLink to='/services' activeClassName={'active'}>Services</NavLink>
                <NavLink to='/profile' activeClassName={'active'}>Profile</NavLink>
            </nav>
        )
    }
}

function mapState(state) {
    const { user } = state;
    return { user };
}

const connectedHeader = connect(mapState)(Header);
export { connectedHeader as Header };