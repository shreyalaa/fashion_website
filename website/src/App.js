import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter ,Switch, Route} from "react-router-dom";

import { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Blazers from './components/Blazers';
import Feedback from './components/Feedback';
import Skirts from './components/Skirts';
import Jeans from './components/Jeans';
import Dress from "./components/Dress"

const App = ()=>{
  
  const [click , setClick] = useState(false)

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Route path = "/home" exact component = {Home}/>
    <Route path = "/contact" exact component = {Contact}/> 
    <Route path = "/about" exact component = {About}/>
    <Route path = "/feedback" exact component = {Feedback}/>
    <Route path = "/blazers" exact component = {Blazers}/>
    <Route path = "/skirts" exact component = {Skirts}/>
    <Route path = "/jeans" exact component = {Jeans}/>
    <Route path = "/dress" exact component = {Dress}/>
    <Footer/> 
    </BrowserRouter>
    </div>
  );
}

export default App;
