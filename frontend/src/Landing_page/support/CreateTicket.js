import React from 'react';

function CreateTicket() {
    return (  
        <div className='container p-5'>
        <p className='mt-3 p-3 mx-5 fs-4 text-muted'>To create a ticket, select a relevant topic</p>
            <div className='row p-4 mx-5' style={{lineHeight:"2rem", fontSize:"14px"}}>
                <div className='col-4'>
                    <a href='' class="ticket-link">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>{" "}
                        Account Opening
                    </a><br/>
                    <div className='mx-4'>
                        <a href=''  style={{textDecoration:"none"}}>Resident individual</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Minor</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Glossary</a><br />
                    </div>
                </div>
                <div className='col-4'>
                    <a href='' class="ticket-link">
                        <i class="fa fa-user-o" aria-hidden="true"></i>{" "}
                        Your Zerodha Account
                    </a><br/>
                    <div className='mx-4'>
                        <a href=''  style={{textDecoration:"none"}}>Your Profile</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Account modification</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Nomination</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Transfer and conversion of securities</a><br />
                    </div>
                </div>
                <div className='col-4'>
                    <a href='' class="ticket-link">
                       <i class="fa fa-bar-chart" aria-hidden="true"></i>{" "}
                        Kite
                    </a><br/>
                    <div className='mx-4'>
                        <a href=''  style={{textDecoration:"none"}}>IPO</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Trading FAQs</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Charts and orders</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Alerts and Nudges</a><br />
                        <a href=''  style={{textDecoration:"none"}}>General</a><br />
                    </div>
                </div>
                <div className='col-4 mt-3'>
                    <a href='' class="ticket-link">
                        <i class="fa fa-credit-card" aria-hidden="true"></i>{" "}
                        Funds
                    </a><br/>
                    <div className='mx-4'>
                        <a href=''  style={{textDecoration:"none"}}>Add money</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Withdraw money</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Add bank accounts</a><br />
                        <a href=''  style={{textDecoration:"none"}}>eMandates</a><br />
                    </div>
                </div>
                <div className='col-4 mt-3'>
                    <a href='' class="ticket-link">
                        <i class="fa fa-user-circle" aria-hidden="true" style={{transform:"rotate(-90deg)"}}></i>{" "}
                         Console
                    </a><br/>
                  
                   <div className='mx-4'>
                        <a href=''  style={{textDecoration:"none"}}>Portfolio</a><br />   
                        <a href=''  style={{textDecoration:"none"}}>Corporate actions</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Funds statement</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Reports</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Profile</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Segments</a><br />
                   </div>
                </div>
                <div className='col-4 mt-3'>
                     <a href='' class="ticket-link">
                        <i class="fa fa-circle-o" aria-hidden="true"></i>{" "}
                        Coin
                    </a><br/>
                    <div className='mx-4'>
                        <a href=''  style={{textDecoration:"none"}}>Mutual funds</a><br />
                        <a href=''  style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Fixed Deposit (FD)</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Features on Coin</a><br />
                        <a href=''  style={{textDecoration:"none"}}>Payments and Orders</a><br />
                        <a href=''  style={{textDecoration:"none"}}>General</a><br />
                    </div>
                </div>
            </div>
        </div>
        );
}

export default CreateTicket;