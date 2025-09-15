import React from 'react';

function Hero() {
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5, mx-auto' style={{width: "62%"}}/>
                <h1 className='mt-5' style={{fontSize:"290%"}}>Invest in everything</h1>
                <p className='mt-1 mb-4' style={{fontSize:"135%"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"16%" , margin: "0 auto"}}>Sign Up for free</button>
            </div>
        </div>
    );
}

export default Hero;