import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const ServicesItem  = (props) => {
    return <li><b>{props.name}</b>{props.dots}<span>{props.price}</span><br/>
        <div>{props.desc}</div>
    </li>
};

const Services = () => {

    let services = [
        {name: 'Classic haircut', dots: '................................................', price: '3.4$',
            desc: 'Not a procedure, but a traditional ritual'},
        {name: 'Classic haircut & hair washing', dots: '..............', price: '4.2$',
            desc: 'Clean traditional ritual'},
        {name: 'Hair washing', dots: '...................................................', price: '1.5$',
            desc: 'Let\'s clean even where it cannot be'},
        {name: 'Classic haircut for long hair', dots: '........................', price: '4$',
            desc: 'Trim the ponytail. He needs care too'},
        {name: 'Classic shaving', dots: '.............................................', price: '2.8$',
            desc: 'Not a procedure, but a traditional ritual'},
        {name: 'Trimming & arranging long beard', dots: '........', price: '4$',
            desc: 'Traditional ritual for ponytail'},
        {name: 'Stylization & arranging beard', dots: '..............', price: '5.2$',
            desc: 'We will figure out how to make you a real man\n'},
        {name: 'Classic haircut and shaving', dots: '....................', price: '6.5$',
            desc: 'We will figure out how to make you a real man\n'},
        {name: 'Haircut & trimming long beard', dots: '...............', price: '7$',
            desc: 'Trim the ponytail. He needs care too'},
        {name: 'Beard washing', dots: '...............................................', price: '1.5$',
            desc: 'Let\'s clean even where it cannot be'},
        {name: 'Beard & hair washing', dots: '................................', price: '2.5$',
            desc: 'Let\'s clean even where it cannot be'},
        {name: 'Child haircut', dots: '...................................................', price: '2.2$',
            desc: 'A man is a man even at 12 years old'}
    ];

    let servicesElements = services.map (s => <ServicesItem name={s.name} dots={s.dots}
                                                              price={s.price} desc={s.desc}/>);

    return (
        <div className={'services'}>
            <div className="services-general">
                <h1>This is our offer</h1>
                <p>Our masters will always help you choose and make exactly the haircut that emphasizes your
                    personality. <br/>
                    Register and see for yourself!</p>
                <div className={'row'}>
                    <ul className={'list1 col-md-4'}>
                        { servicesElements }
                    </ul>
                </div>
                <NavLink to={'/profile'}>
                    <button type="button" className="btn btn-lg">appointment</button>
                </NavLink>
            </div>
            <div className="services-imgs">
                <h2>our work</h2>
                <img src={require('../imgs/cut1.jpg')} alt=""/>
                <img src={require('../imgs/cut2.jpg')} alt=""/>
                <img src={require('../imgs/cut3.jfif')} alt=""/>
                <img src={require('../imgs/cut4.jfif')} alt=""/>
                <img src={require('../imgs/cut5.jpg')} alt=""/>
                <img src={require('../imgs/cut9.png')} alt=""/>
                <img src={require('../imgs/cut7.jpg')} alt=""/>
                <img src={require('../imgs/cut8.jpg')} alt=""/>
            </div>
        </div>
    )
};

export default Services;