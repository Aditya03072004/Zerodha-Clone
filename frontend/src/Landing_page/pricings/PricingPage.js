import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Footer from '../Footer';
import OpenAcc from '../OpenAcc';

function PricingPage() {
    return (  
        <>
            <Hero />
            <OpenAcc />
            <Brokerage />
        </>
    );
}

export default PricingPage;