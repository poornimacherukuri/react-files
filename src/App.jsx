import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FunctionComponent from "./FunctionComponent";
import Myimage from "./assets/react.svg";
function App() {
  var MyCards = [
    {
      image: Myimage,
      Price: "200/-",
      Brand: "USPA",
    },
    {
      image: Myimage,
      Price: "50000/-",
      Brand: "Thub",
    },
    {
      image: Myimage,
      Price: "30000/-",
      Brand: "Aditya",
    },
    {
      image: Myimage,
      Price: "5000/-",
      Brand: "Rare Rabbit",
    },
  ];
  return (
    <div class="parent">
      {MyCards.map((ele) => {
        return <FunctionComponent Data={ele} />;
      })}
    </div>
  );
}
export default App;








// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ClassComponent from './ClassComponent'
// import FunctionComponent from './FunctionComponent'
// import S1 from './s1'
// import S2 from './S2'
// import myimage from "./assets/react.svg"

// function App() {
  

//   return (
//     <>
//       {/* <ClassComponent/>
//       <FunctionComponent/>
//       <ClassComponent/>
//       <FunctionComponent/>
//       <ClassComponent/>
//       <FunctionComponent/> */}
//       {/* <S1/>
//       <S2/> */}
//       <FunctionComponent/>
//     </>
//   )
// }

// export default App
