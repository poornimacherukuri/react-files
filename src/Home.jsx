import React from "react";
import Myimage from "./assets/react.svg";
import { Link } from "react-router-dom";
const Home = () => {
    const Change=()=>{
        window.location.href="/error"
    }
  return (
    <>
      <div>
        <h1>This is Home Page</h1>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/services">Services</Link></div>
        <div><Link to="/support">Support</Link></div>
        <div><button onClick={Change}>Error</button></div>
      </div>
    </>
  );
};

export default Home;