import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const Notfound = () => {
  return (
    <center>
      <div className="navigation-elements">
        <Link to="/">Login</Link>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not-found"
        />
        <h1>Not Found 404 Error</h1>
      </div>
    </center>
  );
};

export default Notfound;