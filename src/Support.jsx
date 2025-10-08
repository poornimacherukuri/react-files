import React from "react";
import Myimage from "./assets/react.svg";
const Support = () => {
    
  return (
    <>
      <div>
        <h1>This is Support Page</h1>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/services">Services</Link></div>
        <div><button onClick={Change}>Error</button></div>
      </div>
    </>
  );
};

export default Support;