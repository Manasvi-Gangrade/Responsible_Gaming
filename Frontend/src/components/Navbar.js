import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gaming-insights">Gaming Insights</Link>
        </li>
        <li>
          <Link to="/fraud-detection">Fraud Detection</Link>
        </li>
        <li>
          <Link to="/report-concern">Report Concern</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
