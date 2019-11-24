import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const SignIn = () => {
    return (
        <div className={'login'}>
            <h2>login</h2>
            <div className={'email'}>
                <label htmlFor="email">Email address *</label><br/>
                <input type="email" name="email" id="email"/>
            </div>
            <div className={'psw'}>
                <label htmlFor="psw">Password *</label><br/>
                <input type="password" name="psw" id="psw"/>
            </div>
            <div>
                <NavLink to={'/profile'}>
                  <button type="button" className="btn btn-lg">sign in</button>
                </NavLink>
                <div className={'check'}>
                    <input type="checkbox" name="check" id="check"/>
                    <label htmlFor="check">Remember me</label>
                </div>
                <NavLink to={'/signUp'}>
                    <button type="button" className="btn btn-lg" id={'signUp'}>Sign Up</button>
                </NavLink>
            </div>
        </div>
    )
};

export default SignIn;