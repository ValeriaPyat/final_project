import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DateTime} from "./Date";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user
        };
        console.log(this.state.user)
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
                <div className="book">
                    <h2>Appointment</h2>
                    <div className={'serv'}>
                        <label htmlFor="service">Please select the service that interests you from the list:</label>
                        <br/>
                        <select className="service" id="serv">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className={'dateTime'}>
                        <label htmlFor="date">Select date and time:</label> <br/>
                        <DateTime id={"date"}/>
                    </div>
                    <button type="button" className="btn btn-lg" id={'signUp'}>Booking</button>
                    <NavLink to={'/login'}>
                        <button type="button" className="btn btn-lg">Logout</button>
                    </NavLink>
                </div>
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