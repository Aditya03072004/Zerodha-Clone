import React from "react";
import { Link } from "react-router-dom";
function OpenAcc() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-5 fs-2">Open a Zerodha account</h1>
        <p className="mt-3 mb-4 fs-6 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="signup">
          <button
            className="p-2 btn btn-primary fs-5 mt-3 mb-5"
            style={{ width: "16%", margin: "0 auto" }}
          >
            Sign Up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAcc;
