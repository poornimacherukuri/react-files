// 24-09-25
import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Newtask.css";
import React from "react";

function NewtaskApp(){
    const[CompleteData,setCompleteData]=useState([
        {
            "name":"Poornima",
            "roll":"23MH1A05M0"
        },
        {
            "name":"Prasanna",
            "roll":"23MH1A4416"
        },
        {
            "name":"Keerthi",
            "roll":"23P31A4431"
        },
        {
            "name":"Sai",
            "roll":"23A91A0466"
        },
        {
            "name":"Manasa",
            "roll":"23MH1A05N9"
        },
        {
            "name":"Hema",
            "roll":"23MH1A05P5"
        }
    ])
    const[QueryResult,setQueryResult]=useState([])
    const [UserQuery,setUserQuery]=useState("")
    const Capture=(event)=>{
        setUserQuery(event.target.value)
    }

    useEffect(()=>{
        if(UserQuery!=""){
            var arr=CompleteData.filter((ele)=>(ele.name.includes(UserQuery)||ele.roll.includes(UserQuery)))
            setQueryResult(arr)
        }
        else{
            setQueryResult(CompleteData)
        }
    },[UserQuery]);
    return(
        <>
        <input type="text" placeholder="Search here" onChange={(event)=>Capture(event)}/>
        <div className="parent">
            {QueryResult.map((ele)=>{
                return(
                    <div className="card">
                        <div>Name:{ele.name}</div>
                        <div>Roll Number:{ele.roll}</div>
                    </div>
                )
            })}
        </div>
        </>
    )

}

export default NewtaskApp;