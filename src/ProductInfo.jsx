import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useParams } from "react-router-dom";
import image from "./assets/react.svg";
import React from "react";
import "./products.css";

function ProductInfo() {
  const Data = [
      {
        'ID': 1,
        'Name': "Tshirt",
        'Brand': "US Polo",
        'Price': 23000,
        'Image': image,
        'Description':
          "A T-shirt (or tee) is a style of fabric shirt named after the T shape of its body and sleeves. It is normally associated with short sleeves, a round neckline known as a crew neck, and no collar.",
        'Specifications': {
          'Material': "Cotton",
          'Color': "White",
          'Size': "M",
        },
      },
      {
        'ID': 2,
        'Name': "Track suit",
        'Brand': "Adidas",
        'Price': 45000,
        'Image': image,
        'Description':
          "A track suit is a two-piece garment consisting of a zippered jacket and pants, typically made from lightweight, breathable materials such as polyester or nylon. It is designed for athletic activities and casual wear.",
        'Specifications': {
          'Material': "Polyester",
          'Color': "Black",
          'Size': "L",
        },
      },
      {
        'ID': 3,
        'Name': "Jeans",
        'Brand': "Levis",
        'Price': 35000,
        'Image': image,
        'Description':
          "Jean is a type of pants or trousers made from denim fabric, known for its durability and versatility. It is a popular choice for casual wear and comes in various styles, fits, and washes.",
        'Specifications': {
          'Material': "Denim",
          'Color': "Blue",
          'Size': "S",
        },
      },
      {
        'ID': 4,
        'Name': "Shirt",
        'Brand': "Louis Phillipe",
        'Price': 40000,
        'Image': image,
        'Description':
          "A shirt is a garment worn on the upper body, typically with a collar, sleeves, and buttons down the front. It is a versatile piece of clothing that can be dressed up or down for various occasions.",
        'Specifications': {
          'Material': "Silk",
          'Color': "Pink",
          'Size': "M",
        },
      },
      {
        'ID': 5,
        'Name': "Polo T-shirt",
        'Brand': "Tommy Hilfiger",
        'Price': 28000,
        'Image': image,
        'Description':
          "A polo T-shirt, also known as a polo shirt or golf shirt, is a type of shirt that features a collar, a placket with buttons, and short sleeves. It is typically made from knitted cotton fabric and is often associated with sports like polo and golf.",
        'Specifications': {
          'Material': "Cotton",
          'Color': "Brown",
          'Size': "XL",
        },
      },
    ];
  const ReceivedData = useParams();
  console.log(ReceivedData);
  const [Product, setProduct] = useState(null);
  useEffect(() => {
    Data.filter((ele) => {
      if (ele.ID == parseInt(ReceivedData.ID)) {
        setProduct(ele);
      }
    });
  }, []);

  return (
    <div>
      {Product ? (
        <div className="product-info">
          <div><b>Name:</b>{Product.Name}</div>
          <div><b>Brand:</b>{Product.Brand}</div>
          <div><b>Price:</b>{Product.Price}</div>
          <div><b>Description:</b>{Product.Description}</div>
          <div><b>Specifications:</b><br/>Material- {Product.Specifications.Material}<br/>
            Color- {Product.Specifications.Color}<br/>
            Size- {Product.Specifications.Size}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductInfo;
