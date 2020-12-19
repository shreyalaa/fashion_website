import React from "react";
import Cards from "./Cards";
import img  from "./pics/Untitled.png"
import  skrt1 from "./pics/skrt1.png"
import "./skirt.css"
const Skirts = () =>{
    return(
        <div>
        <Cards url= "https://www.google.com/aclk?sa=l&ai=DChcSEwiQjLbX99ntAhWQg0sFHWjeACIYABANGgJzZg&sig=AOD64_0IHP2-stdy0GId3J6ZRpa27jdzHQ&adurl&ctype=5&ved=2ahUKEwjlkKzX99ntAhWg5DgGHXuDDIYQvhd6BAgBEFc" title = "printed skirt" image = {skrt1}></Cards> 
        <Cards url= "https://www.flipkart.com/herija-solid-women-pleated-maroon-skirt/p/itmbee0c340ab2d7?pid=SKIFT6KRXY4QAUGW&lid=LSTSKIFT6KRXY4QAUGW8NVWKT&marketplace=FLIPKART&cmpid=content_skirt_8965229628_gmc" title = "maroon skirt" image = {img}></Cards>
        
       <div className ="cardA">
        <Cards url= "https://www.flipkart.com/herija-solid-women-pleated-maroon-skirt/p/itmbee0c340ab2d7?pid=SKIFT6KRXY4QAUGW&lid=LSTSKIFT6KRXY4QAUGW8NVWKT&marketplace=FLIPKART&cmpid=content_skirt_8965229628_gmc" title = "maroon skirt" image = {img}></Cards>
       
        </div>
        </div>
    )
}
export default Skirts