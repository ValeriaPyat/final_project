import React from "react"
import {connect} from "react-redux";
import {userService} from "../service";
import {listActions} from "../actions";
import {NavLink} from "react-router-dom";
import DatePicker from "react-datepicker";

let idGenerator = 0;

class ServicesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: userService.getLoggedInUser(),
            serviceName: '1'
        };

        this.addService = this.addService.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    addService(e) {
        e.preventDefault();

        const {serviceName, serviceDate} = this.state;
        if (!serviceName || !serviceDate) {
            return;
        }

        const user = listActions.addServiceToList({
            id: idGenerator++,
            serviceName: serviceName,
            serviceDate: serviceDate.toString()
        });

        this.setState({user: user})
    }

    handleSelect(e) {
        this.setState({serviceName: e.target.value});
    }

    handleDateChange(date) {
        this.setState({serviceDate: date});
    }

    render() {
        const {serviceList} = this.state.user;

        return (
                <div className="book">
                    <h2>Appointment</h2>
                    <form onSubmit={this.addService}>
                        <div className={'serv'}>
                            <label htmlFor="service">Please select the service that
                                interests
                                you from the list:</label>
                            <br/>
                            <select value={this.state.serviceName} className="service"
                                    id="serv" onChange={this.handleSelect}
                                    onSelect={this.handleSelect}>
                                <option value="1">11</option>
                                <option value="2">22</option>
                                <option value="3">33</option>
                                <option value="4">44</option>
                                <option value="5">55</option>
                            </select>
                        </div>
                        <div className={'dateTime'}>
                            <label htmlFor="date">Select date and time:</label> <br/>
                            <DatePicker id={"date"}
                                        selected={this.state.serviceDate}
                                        onChange={this.handleDateChange}
                                        showTimeSelect
                                        dateFormat="Pp"
                            />
                        </div>
                      <div className="buttons row">
                          <button type="submit button" className="btn btn-lg"
                                  id={'signUp'}>Booking
                          </button>
                          <NavLink to={'/login'}>
                              <button type="button" className="btn btn-lg" id={'logout'}>Logout</button>
                          </NavLink>
                      </div>
                    </form>
                    {serviceList &&
                    serviceList.map(service => (
                        <div>{service.serviceName} : {service.serviceDate}</div>
                    ))
                    }
                </div>
        )
    }
}

function mapState(state) {
    return {}
}

const connectedUserServices = connect(mapState)(ServicesList);
export {connectedUserServices as ServiceList}