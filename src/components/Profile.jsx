import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DateTime} from "./Date";

const Profile = () => {
    return (
        <div className={'profile'}>
            <h1>my account</h1>
            <div className={'name'}>
                <img src={require('../imgs/cut.png')}/>
                <p>First name : ....</p>
                <p>Second name: ....</p>
                <p>E-mail: ....</p>
            </div>
            <div className="book">
                <h2>Appointment</h2>
                <div className={'serv'}>
                    <label htmlFor="service">Please select the service that interests you from the list:</label> <br/>
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
            </div>
        </div>
    )
};

export default Profile;