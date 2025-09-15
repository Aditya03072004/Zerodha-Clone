import React from 'react';

function Team() {
    return ( 
        <div className='container p-5'>
            <h1 className=' fs-2 text-center mt-5 mb-5'>People</h1>
            <div className='row g-0'>
                <div className='col-6 mt-4 text-center'>
                    <img src='media/images/nithinKamath.jpg' 
                    style={
                        {
                            
                            width:"290px",
                            height:"290px", 
                            borderRadius:"100%"
                        }
                    }/>
                    <h4 className='mt-3 text-muted'>Nithin Kamath</h4>
                    <h6 className='mt-2 text-muted'>Founder, CEO</h6>
                </div>
                <div className='col-6 mt-5'style={{fontSize:"17px"}}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href=''style={{textDecoration:"none"}}>Homepage</a> / <a href=''style={{textDecoration:"none"}}>TradingQnA</a> / <a href=''style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;