import React, { useState } from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import "./Navbar.css"
import Home from "./Home";
import InfoIcon from '@material-ui/icons/Info';
import Heading from "./Heading";
import Contact from "./Contact";
const Navbar = ()=>{
    
    const [click , setClick] = useState(false)

    const handleClick = () =>{ setClick(!click)}
    return(
        <div>
           <div className ="navbar" >
             <div>
             <Button> <Link style={{color:"cyan"}} to ="/home">home<HomeIcon/></Link></Button>
             <Button> <Link style={{color:"cyan"}}to ="/about"> about us  <InfoIcon/></Link></Button>
             <Button> <Link style={{color:"cyan"}}to ="/feedback"> feedback  <InfoIcon/></Link></Button> 
             
             <Contact/>
             </div>
          </div>
          <Heading/>  
        
        </div>
    )
}
export default Navbar;