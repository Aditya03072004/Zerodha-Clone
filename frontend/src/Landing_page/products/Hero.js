import React from 'react';

function Hero() {
    return (
        <div className='container mb-5 p-5 border-bottom'>
            <div className='text-center p-5 mt-5'>
                <h1 style={{fontSize:"46px"}}>Zerodha Products</h1>
                <h5 className='mt-3'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mt-4' style={{fontSize:"17px"}}>
                    Check out our{" "}
                    <a href='#'style={{textDecoration:"none"}}>
                        investment offerings <i class="fa fa-long-arrow-right"aria-hidden="true"></i>
                    </a>
                </p>
            </div>

        </div> 
     );
}

export default Hero;