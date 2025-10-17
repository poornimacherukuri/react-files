// import React from "react";
// import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import "./FullTask.css";
// import Store from "./Store";
// import { useContext } from "react";

// function AddData() {
//   const { Data, setData } = useContext(Store);
//   const Fun = () => {
//     setData([...Data, productData]);
//     productData = {
//       Name: "",
//       Brand: "",
//       Size: "",
//       Price: "",
//       Description: "",
//       Image: "",
//     };
//   };

//   var productData = {
//     Name: "",
//     Brand: "",
//     Size: "",
//     Price: "",
//     Description: "",
//     Image: "",
//   };


//   var GetData = (key, event) => {
//     productData[key] = event.target.value;
//   };
//   const [ImagePath, setImagePath] = useState(null);
//   var ImgData = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       console.log(reader.result);
//       setImagePath(reader.result);
//     };
//   };

//   return (
//     <>
//       <div className="header">
//         <Link to="/">View Data</Link>
//         <Link to="/adddata">Add Data</Link>
//       </div>
//       <div className="body">
//         <h2>Add Data</h2>
//         <form>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               placeholder="Enter Name of the product"
//               onChange={(event) => GetData("Name", event)}
//             />
//             <br />
//           </div>
//           <div>
//             <label>Brand:</label>
//             <input
//               type="text"
//               placeholder="Enter Brand of the product"
//               onChange={(event) => GetData("Brand", event)}
//             />
//             <br />
//           </div>
//           <div>
//             <label>Size:</label>
//             <input
//               type="text"
//               placeholder="Enter Size of the product"
//               onChange={(event) => GetData("Size", event)}
//             />
//             <br />
//           </div>
//           <div>
//             <label>Price:</label>
//             <input
//               type="number"
//               placeholder="Enter Price of the product"
//               onChange={(event) => GetData("Price", event)}
//             />
//             <br />
//           </div>
//           <div>
//             <label>Description:</label>
//             <textarea
//               placeholder="Enter Description of the product"
//               onChange={(event) => GetData("Description", event)}
//             ></textarea>
//             <br />
//           </div>
//           <div>
//             <label>Image:</label>
//             <input type="file" onChange={ImgData} />
//             {ImagePath ? (
//               <img className="myimg" src={ImagePath} alt="No image found" />
//             ) : null}
//             <br />
//           </div>
//           <div>
//             <button type="submit" onClick={Fun}>Submit</button>
//             <button type="reset">Reset</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default AddData;

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Store from "./Store";
import "./FullTask.css";

function AddData() {
  const { Data, setData } = useContext(Store);
  const [productData, setProductData] = useState({
    Name: "",
    Brand: "",
    Size: "",
    Price: "",
    Description: "",
    Image: "",
  });

  const navigate = useNavigate();

  const handleChange = (key, event) => {
    setProductData({ ...productData, [key]: event.target.value });
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProductData({ ...productData, Image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productData.Name || !productData.Brand|| !productData.Price|| !productData.Image) {
      alert("Please fill all required fields!");
      return;
    }
    const newProduct = { ...productData, id: Date.now() };
    setData([...Data, newProduct]);
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <Link to="/">View Data</Link>
        <Link to="/adddata">Add Data</Link>
      </div>

      <div className="body">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => handleChange("Name", e)}
          />

          <label>Brand:</label>
          <input
            type="text"
            placeholder="Enter Brand"
            onChange={(e) => handleChange("Brand", e)}
          />

          <label>Size:</label>
          <input
            type="text"
            placeholder="Enter Size"
            onChange={(e) => handleChange("Size", e)}
          />

          <label>Price:</label>
          <input
            type="number"
            placeholder="Enter Price"
            onChange={(e) => handleChange("Price", e)}
          />

          <label>Description:</label>
          <textarea
            placeholder="Enter Description"
            onChange={(e) => handleChange("Description", e)}
          ></textarea>

          <label>Image:</label>
          <input type="file" onChange={handleImage} />
          {productData.Image && (
            <img className="preview" src={productData.Image} alt="preview" />
          )}

          <div className="btns">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddData;
