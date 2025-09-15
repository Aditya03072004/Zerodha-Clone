import React from 'react';

function RightSection({
   imageURL,
  productName,
  productDescription,
  learnMore
}) {
    return (
      <div className="container mt-5">
      <div className="row" style={{ marginRight: "80px", marginLeft:"150px" }}>
       <div className='col-5 p-5'style={{ marginTop: "40px", }}>
        <h1>{productName}</h1>
         <p className="mt-4" style={{fontSize:"1.1rem"}}>{productDescription}</p>
         <div className="mb-3">

            <a href={learnMore} style={{textDecoration:"none"}}>
            Learn more{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

          </div>
       </div>
       <div className='col-1'></div>
       <div className='col-6'>
        <img src={imageURL} style={{ marginTop: "-40px" }}/>
       </div>
      </div>
    </div>    
    );
}

export default RightSection;