import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Store from "./Store";
import "./FullTask.css";

function ViewProduct() {
  const { id } = useParams();
  const { Data } = useContext(Store);
  const product = Data.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <div className="header">
        <Link to="/">View Data</Link>
        <Link to="/adddata">Add Data</Link>
      </div>

      <div className="body">
        <div className="product-detail">
          <h2>{product.Name}</h2>
          {product.Image && (
            <img className="detail-img" src={product.Image} alt={product.Name} />
          )}
          <p><strong>Brand:</strong> {product.Brand}</p>
          <p><strong>Price:</strong> ₹{product.Price}</p>
          <p><strong>Size:</strong> {product.Size}</p>
          <p><strong>Description:</strong> {product.Description}</p>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
