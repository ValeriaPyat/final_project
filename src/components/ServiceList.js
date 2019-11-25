import React from "react"
import {connect} from "react-redux";
import {userService} from "../service";
import {listActions} from "../actions";
import {NavLink} from "react-router-dom";
import DatePicker from "react-datepicker";
import {getNextId} from "../helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from 'react-time-format';

class ServicesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: userService.getLoggedInUser(),
      serviceName: 'Classic haircut'
    };

    this.addService = this.addService.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  addService(e) {
    e.preventDefault();

    const {serviceName, serviceDate} = this.state;
    if (!serviceName || !serviceDate){
      return;
    }


    const user = listActions.addServiceToList({
      id: getNextId(),
      serviceName: serviceName,
      serviceDate: serviceDate.toString()
    });

    this.setState({user: user})
  }

  handleSelect(e) {
    this.setState({serviceName: e.target.value});
  }

  handleDateChange(date){
    this.setState({serviceDate: date});
  }

  handleRemove(e){
    let id = e.target.value;
    let user = listActions.removeServiceFromList(id);

    this.setState({user: user});
  }

  render() {
    const {serviceList} = this.state.user;
    const OptionItem  = (props) => {
      return <option>{props.name}</option>
    };
    let options = [
      {name: 'Classic haircut'},
      {name: 'Classic haircut & hair washing'},
      {name: 'Hair washing'},
      {name: 'Classic haircut for long hair'},
      {name: 'Classic shaving'},
      {name: 'Trimming & arranging long beard'},
      {name: 'Stylization & arranging beard'},
      {name: 'Classic haircut and shaving'},
      {name: 'Haircut & trimming long beard'},
      {name: 'Beard washing'},
      {name: 'Beard & hair washing'},
      {name: 'Child haircut'}
    ];
    let optionsElements = options.map (o => <OptionItem name={o.name}/>);
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
                  {optionsElements}
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
              <div className="row buttons col-md-6">
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
              <div className={'row appointment col-md-6'}>
              <div className={'item'}>
                <p><b>You have an appointmant: </b> {service.serviceName} </p>
                <p><b>Date and time:  </b><Time value={service.serviceDate} format={'DD-MM-YYYY hh:mm'}/></p>
              </div>
                <button type="button" className="btn btn-lg" value={service.id}
                        onClick={this.handleRemove}>Remove</button>
              </div>
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