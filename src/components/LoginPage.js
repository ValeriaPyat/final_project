import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {history} from "../helpers";

import {userActions} from '../actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password} = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }


  componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.user){
        history.push("/profile");
      }
  }


  componentDidMount() {
    if (this.props.user){
      history.push("/profile");
    }
  }

  render() {
        const {loggingIn} = this.props;
        const {username, password, submitted} = this.state;
        return (
            <div className="signIn col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username}
                               onChange={this.handleChange}/>
                        {submitted && !username &&
                        <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password}
                               onChange={this.handleChange}/>
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg">Login</button>
                        {loggingIn}
                        <NavLink to={'/registration'}>
                            <button type="button" className="btn btn-lg" id={'signUp'}>Sign Up</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const {loggingIn, user} = state.authentication;
    return {loggingIn, user};
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export {connectedLoginPage as LoginPage};