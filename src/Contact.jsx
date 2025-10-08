import React from "react";
import Myimage from "./assets/react.svg";
const Contact = () => {
    
  return (
    <>
      <div>
        <h1>This is Contact Page</h1>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/services">Services</Link></div>
        <div><Link to="/support">Support</Link></div>
        <div><button onClick={Change}>Error</button></div>
      </div>
    </>
  );
};

export default Contact;