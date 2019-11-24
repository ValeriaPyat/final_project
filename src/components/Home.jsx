import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className={'home'}>
            <div className={'general'}>
                <h1>rebel</h1>
                <p id={'quote'}>Beware of the young doctor and the old barber.</p>
                <div className='marquee'>
                    <div className='marquee-text'>
                        barber
                    </div>
                </div>
            </div>
            <div className={'about'}>
                <p> <b>Rebel</b> is a male world. This is the territory where in the first place is the male brutal personality.
                    This place is for real men.<br/>
                    Our pride is the possession of classic and modern methods of hazardous shaving.
                    Our barbers have been trained to the highest international standards.<br/>
                    We wanted to create a place where a man can create his own unique image and be like no one else.
                    We want to help you feel your strength, masculinity and character.<br/>
                    We know everything about male hair care and scalp care.
                    But we pay the same great attention to the mustache and beard,
                    because for many of you they make up 90% of the image.
                </p>
            </div>
        </div>
    )
};

export default Home;