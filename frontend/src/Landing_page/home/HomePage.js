import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricings from './Pricings';
import Education from './Education';
import OpenAcc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Homepage() {
    return (  
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricings />
            <Education />
            <OpenAcc/>

        </>
    );
}

export default Homepage;