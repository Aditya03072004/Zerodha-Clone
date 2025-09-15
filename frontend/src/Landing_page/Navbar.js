import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-light border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-1 mx-auto">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            className=" mx-5 p-2"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-6" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">
                  About
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="pricings">
                  Pricings
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link " to="support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
          <i class="fa fa-bars mx-4 fs-5 " aria-hidden="true"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
