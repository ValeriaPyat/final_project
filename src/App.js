import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Profile from "./components/Profile";
import {RegisterPage} from "./components/RegisterPage";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {LoginPage} from "./components/LoginPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact render={Home}/>
            <Route path='/home' render={Home}/>
            <Route path='/services' render={Services}/>
            <Route path='/profile' render={Profile}/>
            <Route path='/registration' component={RegisterPage}/>
            <Route path='/login' component={LoginPage}/>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

function mapState(state) {
  return {};
}

const connectedApp = connect(mapState)(App);
export { connectedApp as App };
