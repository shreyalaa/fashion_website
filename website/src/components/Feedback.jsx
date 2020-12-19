import React, { useState } from "react";
import "./Feedback.css"
import { Button } from "@material-ui/core";

const Feedback = () =>
{   
    const [value , setValue ] = useState("")
    const [list , setList] = useState([])
    const handleClick = () =>{
        setList((oldItems)=>{
           return [...oldItems , value]
         } 
        )
        setValue("")  
    }
    return(
      <div>
        <div className = "feedback">
       
        <label>share your thoughts with us.. </label><br/>
        <input onChange = {(event) =>{setValue(event.target.value)}} placeholder = "write here...."/>
        <br/>
        <Button onClick = {handleClick}>submit</Button>
        <ul>
        {
          list.map((val , index)=> <li>{val}</li>) 
        }
        </ul>
        </div>
        </div>

    )
}

export default Feedback;