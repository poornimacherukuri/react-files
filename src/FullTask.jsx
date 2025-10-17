// import React from "react";
// import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AddData from "./AddData";
// import ViewData from "./ViewData";
// import Store from "./Store";

// function FullTask(){
//     const [Data ,setData] = useState([]);
//     return(
//         <>
//         <Store.Provider value={{Data,setData}}>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<ViewData/>}></Route>
//             <Route path="/adddata" element={<AddData/>}></Route>
//         </Routes>
//         </BrowserRouter>
//         </Store.Provider>
//         </>
//     )
// }

// export default FullTask;
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddData from "./AddData";
import ViewData from "./ViewData";
import ViewProduct from "./ViewProduct";
import Store from "./Store";
import "./FullTask.css";

function FullTask() {
  const [Data, setData] = useState([]);

  return (
    <Store.Provider value={{ Data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewData />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/product/:id" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default FullTask;
