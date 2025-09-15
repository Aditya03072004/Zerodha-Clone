import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-lg-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                 <div className='col-sm-12 col-lg-6 p-5 mt-4'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to 15% of all retail order volumes in India daily by tradng and investing in:
                        <div className='row mt-5'>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Futures and options</p>
                                    </li>
                                    <li>
                                        <p>Commodity derivatives</p>
                                    </li>
                                    <li>
                                        <p>Currency derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Stocks & IPOs</p>
                                    </li>
                                    <li>
                                        <p>Direct Mututal Funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Government Securities</p>
                                    </li>
                                </ul>
                            </div>
                            <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        );
}

export default Awards;