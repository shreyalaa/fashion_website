import React from "react";
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import "./Home.css";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";
const Home = () =>{
    return(
        <div className ="main">
       <div className = "home">
      <Link to = "/blazers"><Button>blazers </Button>  </Link> 
       <Link to = "/"> <Button>tops </Button>  </Link> 
       <Link to = "/skirts"> <Button>skirts </Button>  </Link> 
       <Link to = "/dress"> <Button>dresses </Button>  </Link> 
       <Link to = "/jeans"> <Button>jeans </Button>  </Link> 
       <p>explore the world of fashion with us!!! </p>
       </div>
       </div>

    )
}

export default Home;