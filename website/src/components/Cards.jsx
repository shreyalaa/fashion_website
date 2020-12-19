import { Button, Link } from "@material-ui/core";
import React from "react";
import {NavLink} from "react-router-dom"

import "./Cards.css"
const Cards = (props) =>{
    return(
        <div className = "card">
        <div className = "cardH">
        <h2 >{props.title}</h2>
      
        <img src = {props.image} alt = "img"/>
    
        </div>
       <Link href = {props.url} > <Button>go to the site</Button></Link>
        </div>
    )
}

export default Cards;