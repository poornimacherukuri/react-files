import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./HookTask1App.css";
import { useState, useEffect } from "react";
function Hook2App() {

    const [x,setx]=useState(0)
//   useEffect(() => {
//     console.log("Executed....");
//   });
  // useEffect(()=>{
  //     console.log("Executed...")
  // },[])
  useEffect(() => {
    console.log("Executed....");
  },[x]);
  return (
    <>
      <form>
        <div>
          <label>First Name : </label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" />
        </div>
      </form>
      <button onClick={()=>{setx(x+1)}}>Add Data {x}</button>
    </>
  );
}

export default Hook2App;
