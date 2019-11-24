import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={'signUp'}>
            <h2>registration</h2>
            <div className={'firstName'}>
                <label htmlFor="first">First name *</label><br/>
                <input type="text" name="firstName" id="first"/>
            </div>
            <div className={'secondName'}>
                <label htmlFor="second">Second name *</label><br/>
                <input type="text" name="secondName" id="second"/>
            </div>
            <div className={'email'}>
                <label htmlFor="email">Email address *</label><br/>
                <input type="email" name="email" id="email"/>
            </div>
            <div className={'psw'}>
                <label htmlFor="psw">Password *</label><br/>
                <input type="password" name="psw" id="psw"/>
            </div>
            <div className={'pswRepeat'}>
                <label htmlFor="pswRep">Repeat password *</label><br/>
                <input type="password" name="pswrep" id="pswRep"/>
            </div>
            <div>
               <NavLink to={'/signIn'}>
                  <button type="button" className="btn btn-lg">sign up</button>
               </NavLink>
                <NavLink to={'/signIn'}>
                  <button type="button" className="btn btn-lg" id={'signIn'}>sign in</button>
                </NavLink>
            </div>
        </div>
    )
};

export default SignUp;