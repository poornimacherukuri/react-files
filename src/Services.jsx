import React from "react";
import Myimage from "./assets/react.svg";

const Services = () => {
    
  return (
    <>
      <div>
        <h1>This is Services Page</h1>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/support">Support</Link></div>
        <div><button onClick={Change}>Error</button></div>
      </div>
    </>
  );
};
export default Services;