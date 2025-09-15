import React from 'react';
import {Link} from "react-router-dom";
function Universe() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='text-center'>
                <h2>The Zerodha Universe</h2>
                <p className='mt-4 mb-5' style={{fontSize:"1.1rem"}}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center' style={{fontSize:"80%", marginLeft:"10%", marginRight:"10%"}}>
                <div className='col-4 p-4'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"80%"}}/>
                    <p className='text-small text-muted   mt-3 p-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/sensibullLogo.svg' className='mt-2' style={{width:"80%"}}/>
                    <p className='text-muted   mt-3 p-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/Dil, and more.</p>
                </div> 
                <div className='col-4 p-4'>
                    <img src='media/images/tijori.svg' style={{width:"55%"}}/>
                    <p className='text-small text-muted   mt-3 p-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div> 
                <div className='col-4 p-4'>
                    <img src='media/images/streakLogo.png'style={{width:"55%"}}/>
                    <p className='text-small text-muted   mt-3 p-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div> 
                <div className='col-4 p-4'>
                    <img src='media/images/smallcaseLogo.png'/>
                    <p className='text-small text-muted   mt-3 p-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFS.</p>
                </div> 
                <div className='col-4 p-4'>
                    <img src='media/images/dittoLogo.png'style={{width:"45%"}}/>
                    <p className='text-small text-muted   mt-3 p-3'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/signup'>
                    <button className='p-2 btn btn-primary fs-5 mt-3 mb-5' style={{width:"16%" , margin: "0 auto"}}>Sign Up for free</button>
                </Link>            
            </div>
        </div>
     );
}

export default Universe;