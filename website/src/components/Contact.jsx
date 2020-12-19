import { Button } from "@material-ui/core";
import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
const Contact = ()=>{
    return(
        <div className = "contact">
       <Button style ={{color:"blueviolet" ,marginLeft:"30cm"}}> <InstagramIcon/></Button>
       <Button style = {{color:"lightblue"}}> <TwitterIcon /></Button>
       <Button style ={{color:"darkblue"}}> <FacebookIcon/></Button>
        </div>
    )
}
export default Contact;