import React from 'react';

function Pricings() {
    return (  
        <div className='container mt-5'>
            <div className='row'>

                <div className='col'>

                </div>
                 
                <div className='col-4'>
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p style={{fontSize:'105%'}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                <div className='col-7'>

                    <div className='row text-left mt-5'>

                        <div className='col-4'>
                             <img src='media\images\pricing0.svg' style={{width:"55%",float:"left"}}/> 
                            <p style={{fontSize:"70%"}} className='mt-4 mx-2 my-1 text-muted'>Free account opening</p>
                        </div>
                
                        <div className='col-4'>
                            <img src='media\images\pricing0.svg' style={{width:"55%",float:"left",}} className='image-fluid'/>
                            <p style={{fontSize:"70%"}} className='mt-4 me-4 text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>
                
                        <div className='col-4'>
                            <img src='media\images\intradayTrades.svg' style={{width:"55%",float:"left"}}/>
                            <p style={{fontSize:"70%"}} className='mt-4 me-1 text-muted'>Intraday and<br/>F&O</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricings;