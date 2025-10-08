import { useState } from "react";
import './Hook.css';
function Hook1_app(){
    const [Data, setData] = useState(0);
  const Change=()=>{
    setData(Data+1)
  }
  return (
    <>
      <button onClick={Change}>Click Me</button>
      <h1>Count:{Data}</h1>
    </>
  );
}
export default Hook1_app;