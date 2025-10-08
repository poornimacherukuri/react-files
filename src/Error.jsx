import React from "react";
import Myimage from "./assets/react.svg";

const Error = () => {
    
  return (
    <>
      <div>
        <h1>ERROR 404: PAGE NOT FOUND</h1>
        <div><Link to="/home">Home</Link></div>
      </div>
    </>
  );
};

export default Error;