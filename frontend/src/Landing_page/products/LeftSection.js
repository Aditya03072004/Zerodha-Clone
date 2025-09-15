import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5" style={{marginLeft:"12%"}}>
      <div className="row mx-5">
        <div className="col-4 p-4">
          <img src={imageURL}/>
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5 mt-4">
          <h1 className="mx-5">{productName}</h1>
          <p className="mt-4 mx-5" style={{fontSize:"1.1rem"}}>{productDescription}</p>
          <div className="mb-3 mx-5">

            <a href={tryDemo} style={{textDecoration:"none"}}>
            Try demo{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href={learnMore} className="mx-3" style={{textDecoration:"none"}}>
            Learn more{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

          </div>
          <div className="mx-5">

            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />  
            </a>

            <a href={appStore} className="mx-3">
              <img src="media/images/appstoreBadge.svg" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
