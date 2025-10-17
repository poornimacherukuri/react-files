// import React from "react";
// import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import "./FullTask.css";
// import Store from "./Store";
// import { useContext } from "react";

// function ViewData(){
//     var {Data ,setData} = useContext(Store);
//     return(
//         <>
//         <div className="header">
//             <Link to="/">View Data</Link>
//             <Link to="/adddata">Add Data</Link>
//         </div>
//         <div className="body">
//             <h2>View Data</h2>
//             {Data.length > 0 ? (<>
//                     {Data.map((ele) => {
//           return (
//             <div className="child">
//               <div>Name : {ele.Name}</div>
//               <div>Brand : {ele.Brand}</div>
//               <div>Size : {ele.Size}</div>
//               <div>Price : {ele.Price}</div>
//               <div>Description : {ele.Description}</div>
//               {ele.Image && <img src={ele.Image} alt={ele.Name} />}
//             </div>
//           );
//         })}</>
//             ) : (
//                 <p>No data available</p>
//             )}
//         </div>
//         </>
//     )
// }

// export default ViewData;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Store from "./Store";
import "./FullTask.css";

function ViewData() {
  const { Data } = useContext(Store);
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <Link to="/">View Data</Link>
        <Link to="/adddata">Add Data</Link>
      </div>

      <div className="body">
        <h2>All Products</h2>
        {Data.length > 0 ? (
          <div className="card-container">
            {Data.map((ele) => (
              <div
                key={ele.id}
                className="card"
                onClick={() => navigate(`/product/${ele.id}`)}
              >
                {ele.Image && <img src={ele.Image} alt={ele.Name} />}
                <h3>{ele.Name}</h3>
                <p>Brand: {ele.Brand}</p>
                <p>Price: ₹{ele.Price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}

export default ViewData;
