import React from "react";
import "../Style/Home.css";
import Index from "./Index";

export default function Home() {
  return (
    <div className="homeBody">
      <div
        style={{
          backgroundColor: "#fbeddc",
          marginTop: "-22px",
        }}
      >
        <div className="homeBox"> 
          <h1 >Brand New </h1>
          <h1 style={{
            marginTop:'-13px'
          }}>Group of Architects</h1>
          <p className="homePTag">dfghjkjhgfdfghjkjhgfghjkjhgfghjkjhgfghjhgfghj</p>
          
        </div>
      </div>
      <Index />
    </div>
  );
}
