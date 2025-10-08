import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import image from "./assets/react.svg";
import React from "react";
import './App.css'

function ImageMechanism2(){
    const [ImagePath,setImagePath]=useState(null)
    const GetData=(event)=>{
        const file=event.target.files[0]
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload =()=>{
            console.log(reader.result)
            setImagePath(reader.result)
    }}
    return(
        <>
        <input type="file" onChange={GetData}/>
        {ImagePath ? <img className="myimg" src={ImagePath} alt="No image found" /> : null}
        </>
    )
}

export default ImageMechanism2;