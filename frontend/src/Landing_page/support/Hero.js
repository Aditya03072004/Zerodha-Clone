import React from "react";

function Hero() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#0076CE" }}>
      <div
        className="row"
        style={{ color: "white", marginLeft: "10%", marginRight: "6%" }}
      >
        <div className="col-7 p-5">
          <h4 className="fs-5">Support Portal</h4>
          <p className="fs-4 mt-5">
            Search for an answer or browse help topics to create a ticket
          </p>
          <div className="d-flex">
            <input
              type="search"
              placeholder="Eg: how do i activate F&O, why my order is getting rejected...      "
              style={{
                width: "50rem",
                height: "4.25rem",
                padding: "20px",
                border: "10px",
                backgroundColor: "#FAF9F6",
                fontSize:"1.07rem"
              }}
              className="mt-2"
            />
            <p
              className="text-muted fs-4 p-3 mt-2"
              style={{ backgroundColor: "#FAF9F6" }}
            >
              <i class="fa fa-search" aria-hidden="true"></i>
            </p>
          </div>
          <div className="row mb-5" style={{ fontSize: "17px" }}>
            <div className="col-4">
              <a
                href=""
                style={{ textUnderlineOffset: "0.65rem", color: "white" }}
              >
                Track account opening
              </a>
            </div>
            <div className="col-4">
              <a
                href=""
                style={{ textUnderlineOffset: "0.65rem", color: "white" }}
              >
                Track segment activation
              </a>
            </div>
            <div className="col-4">
              <a
                href=""
                style={{ textUnderlineOffset: "0.65rem", color: "white" }}
              >
                Intraday margins
              </a>
            </div>
            <div className="col-4 mt-3">
              <a
                href=""
                style={{ textUnderlineOffset: "0.65rem", color: "white" }}
              >
                Kite user manual
              </a>
            </div>
          </div>
        </div>
        <div className="col-5 p-5 text-large" style={{marginLeft: "-2rem" }}>
          <a
            href=""
            style={{
              color: "white",
              marginLeft: "19.12rem",
              textUnderlineOffset: "0.4rem",
              fontSize:"18px"
            }}
          >
            Track tickets
          </a>
          <h4 style={{ marginTop: "5rem"}} className="fs-4">
            Featured
          </h4>
          <ol className="mt-3">
            <li>
              <a href="" style={{ color: "white", fontSize:"17px"}}>
                Quaterly settelments of funds - July 2025
              </a>
            </li>
            <li className="mt-4">
              <a href="" style={{ color: "white", fontSize:"17px" }}>
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
