import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='headerBody'>
      <h2>Project-1</h2>
      <div>
       
        <Link to="/About">About
            </Link>
      </div>
    </div>
  )
}
