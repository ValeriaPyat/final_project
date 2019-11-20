import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    return (
        <div className={'profile'}>
                <h1>my account</h1>
            <div className={'login'}>
                <h2>login</h2>
                <div className={'email'}>
                    <label htmlFor="email">Username or email address *</label><br/>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className={'psw'}>
                    <label htmlFor="psw">Password *</label><br/>
                    <input type="password" name="psw" id="psw"/>
                </div>
                <div>
                    <button type="button" className="btn btn-lg">sign in</button>
                    <div className={'check'}>
                        <input type="checkbox" name="check" id="check"/>
                        <label htmlFor="check">Remember me</label>
                    </div>
                    <button type="button" className="btn btn-lg" id={'signUp'}>Sign Up</button>
                    <div className={'lost'}>
                        <a href={'#'}>Lost your password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;