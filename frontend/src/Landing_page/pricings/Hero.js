import React from 'react';

function Hero() {
    return ( 
        <div className='contianer'>
            <div className='text-center p-5 mt-5'>
                <h1 style={{fontSize:"3rem"}}>Charges</h1>
                <p className='mt-3 text-muted fs-5'>List of all charges and taxes</p>
            </div>
            <div className='row text-center p-3' style={{marginLeft:"10%", marginRight:"10%", margin:"8%"}}>
                <div className='col-4 p-3'>
                    <img src='media/images/pricing0.svg' style={{width:"75%"}}/>
                    <h2 className='mt-5'>Free equity delivery</h2>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/intradayTrades.svg' style={{width:"75%"}}/>
                    <h2 className='mt-5'>Intraday and F&O trades</h2>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/pricingEquity.svg' style={{width:"75%"}}/>
                    <h2 className='mt-5'>Free direct MF</h2>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;