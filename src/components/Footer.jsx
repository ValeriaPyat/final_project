import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className={'footer row'}>
            <div className="col-md-4">
                <div className={'info'}>
                    <div className={'info-block'}>
                        <p>rebel</p>
                        <span className={'icon icon-location'}></span>
                        St. Petersburg, Nevsky 75 <br/>
                        <span className={'icon icon-tel'}></span>
                        +7 (955) 5583008 <br/>
                        <span className={'icon icon-email'}></span>
                        <a href='https://www.gmail.com/'> rebel@mail.com </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={'hours'}>
                    <p>working hours</p>
                    Monday-Friday: 9.00 - 20.00 <br/>
                    Saturday-Sunday: 10.00 - 18.00
                </div>
            </div>
            <div className="col-md-4">
                <div className={'follow'}>
                    <p>follow us</p>
                    <span className={'icon icon-ig'}></span>
                    <a href='https://www.instagram.com/'>Instagram</a> <br/>
                    <span className={'icon icon-tw'}></span>
                    <a href='https://twitter.com/'>Twitter</a> <br/>
                    <span className={'icon icon-fb'}></span>
                    <a href='https://www.facebook.com/'>Facebook</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;