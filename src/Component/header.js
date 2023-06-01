import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerBody">
      <h2 className="headerTitle">Project-1</h2>
      <div className="headerBox">
        <Link className="headerLink" to="/">
          Home
        </Link>
        <Link className="headerLink" to="/About">About</Link>
        <Link className="headerLink" to="/ContactUs">Contact Us</Link>
        <Link className="headerLink" to="/Login">Login</Link>
      </div>
    </div>
  );
}
