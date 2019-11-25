import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Header} from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import {Profile} from "./components/Profile";
import {RegisterPage} from "./components/RegisterPage";
import {BrowserRouter, Redirect, Route, Switch, Router} from "react-router-dom";
import {connect} from "react-redux";
import {LoginPage} from "./components/LoginPage";
import {history} from "./helpers";
import {alertActions} from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    })
  }

  render() {
    const {alert} = this.props;

    return (
        <Router history={history}>
          <div>
            <Header component={Header}/>
            <Switch>
              <Route path='/' exact render={Home}/>
              <Route path='/home' render={Home}/>
              <Route path='/services' render={Services}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/registration' component={RegisterPage}/>
              <Route path='/login' component={LoginPage}/>
              <Redirect from="*" to="/"/>
            </Switch>
            {
              alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Footer/>
          </div>
        </Router>
    );
  }
}

function mapState(state) {
  const {alert} = state;
  return {alert};
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export {connectedApp as App};
