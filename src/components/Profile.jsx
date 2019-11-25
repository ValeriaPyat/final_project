import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DateTime} from "./Date";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {ServiceList} from "./ServiceList";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user
        };
    }

    render() {
        const user = this.state.user;
        if (!user ){
            return <Redirect to="/login"/>
        }
        return (
            <div className={'profile'}>
                <h1>my account</h1>
                <div className={'name'}>
                    <img src={require('../imgs/cut.png')}/>
                    {user && <p>First name : {user.firstName}</p>}
                    {user && <p>Last name: {user.lastName}</p>}
                    {user && <p>Username: {user.username}</p>}
                </div>
                <ServiceList/>
            </div>
        )
    }
}

function mapState(state) {
    const {user} = state.authentication;
    return {user};
}

const connectedProfile = connect(mapState)(Profile);
export {connectedProfile as Profile};