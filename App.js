import {BrowserRouter ,Route, Routes} from "react-router-dom"
import Homepage from "./Homepage/Homepage";
import Register from "./Registration/Register"
import { Link } from "react-router-dom";
import LoginPage from "./Loginpage/LoginPage"
import {Component, useState} from "react"
import Product from "./Homepage/product";
import Card from "./Homepage/cards"
import Time from "./Practice/timePractice";
import PracticeDemo from "./Practice/practiceDemo";
import Labtask from "./Practice/lab";
import PracticeMain from "./Practice/PracticeMain";
import A from "./Practice/A";
import B from "./Practice/B";
import PAB from "./Practice/PAB";
import Menu from "./Lab.js/Menu";
import Navbar from "./Lab.js/Navbar";
import Qea from "./Lab.js/Qea";
import Qea1 from "./Lab.js/Qea1";

function App() { 
  return (
     <div >
   
    
     <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/Qea1" element= { <Qea1/>}/>
  <Route path="/Navbar" element= { <Navbar/>}/>
  <Route path="/Menu" element={<Menu/>}/>
  <Route path="/Menu" element={ <Menu/>}/>
  <Route path="/Menu" element={<Menu/>}/>
</Routes>
    





{/*       
<Homepage />
     <Routes>          
     <Route path="/LoginPage" element = {<LoginPage/>}/>
       <Route path="/Register" element = {<Register/>}/>
      <Route path="/product" element = {<Product />}/>
        <Route path= "/" element = {<Homepage/>}/>
        <Route path= "/Loginpage" element = { <LoginPage/>}/>     
      </Routes>  */}
      </div>   
   );
 }

export default App;
