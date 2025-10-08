import React from "react";
import Myimage from "./assets/react.svg";
import "./FunctionComponent.css";

const FunctionComponent = (props) => {
    
  return (
    <>
      <div className="card">
        <div className="logo">
          <img src={props.Data.image} />
        </div>
        <div className="info">
          <div className="price">Price :{props.Data.Price}</div>
          <div className="Brand">Brand :{props.Data.Brand}</div>
        </div>
      </div>
    </>
  );
};

export default FunctionComponent;




// import React from "react";
// import "./FunctionComponent.css";
// import myimage from "./assets/react.svg";
// const FunctionComponent = () => {
//   var MyCards = [
//     {
//       image: myimage,
//       price: 20000,
//       brand: "USPA",
//     },
//     {
//       image: myimage,
//       price: 2000,
//       brand: "PUMA",
//     },
//     {
//       image: myimage,
//       price: 2300,
//       brand: "RARE RABBIT",
//     },
//     {
//       image: myimage,
//       price: 1900,
//       brand: "NIKE",
//     },
//   ];
//   return (
//     <>
//       <div className="parent">
//         {MyCards.map((ele) => {
//           return (
//             <div className="card">
//               <div className="logo">
//                 <img src={ele.image} />
//               </div>
//               <div className="info">
//                 <div className="price">Price: {ele.price}/-</div>
//                 <div className="brand">Brand: {ele.brand}</div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export default FunctionComponent;