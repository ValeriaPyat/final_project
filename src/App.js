import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Profile from "./components/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route path='/' exact render={Home}/>
                <Route path='/home' render={Home}/>
                <Route path='/services' render={Services}/>
                <Route path='/profile' render={Profile}/>
                <Route path='/signIn' render={SignIn}/>
                <Route path='/signUp' render={SignUp}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
