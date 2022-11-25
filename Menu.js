import { Link} from 'react-router-dom'
import React, { useState } from 'react'
import {BsDot,BsMoon,BsSearch,BsBell} from 'react-icons/bs'
import{GrApps} from 'react-icons/gr'
import {MdArrowForwardlc} from "react-icons/md"
import './Menu.css';
import Data from './Data'
import Qea from './Qea'
export default function Menu() { 
  const [cricket , setCricket]= useState({ over: 7 , run : 223 , out: 2});
  const [cricket1 , setCricket1]= useState({ over: 2 , run : 23 , out: 6});
  const [cricket2 , setCricket2]= useState({ over: 4 , run : 73 , out: 1});
  const [data, SetData]= useState([{ 
    image: 'https://i.dawn.com/primary/2021/09/614abcd470706.jpg'},
    { 
      image: 'http://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/tssxwqwgys9wkeoqqk3m'},
      {image: 'https://i.dawn.com/primary/2021/09/614abcd470706.jpg'},
    { 
      image: 'http://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/tssxwqwgys9wkeoqqk3m'}
 ]);


 const deletehandler=(image)=>{
   const updatedData= data.filter((dr)=>(dr.image!=image));
SetData( updatedData); 
console.log("d"+image) 
}
  return (  
    <div>
    <nav  className='navbar' class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">States</a>
        </li>     
      </ul>
      <div  class="d-flex"> 
      < a  className='form'> Edition PK</a>    
       < a href='#' className='form'> <BsMoon/></a>
        < a href='#' className='form'> <BsBell/></a>
        <a href='#'className= 'form' > <GrApps/></a>
        < a href='#' className='form'> <BsSearch/></a> 
      </div>
    </div>
  </div>
</nav>
<div className=' middle-section'>
  <div className=' middle-section-div'>
  {
    data.map((item)=>(
      <div class="card" style={{width:"400px"}}>
      <img src={item.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button  onClick={()=> deletehandler(item.image)}> delete</button>    
      </div>    
    </div>    
    ))
  }   
</div>  
<div className='left-Sider'>
 <Qea     d={cricket} d1={cricket1} d2={cricket2}/>
 {/* <div className='lef-Sider-div0'>
  <h6> Quick Links</h6>
  <hr/>
  <ul >
   <Link to ={ "/Navbar"} ><li>T20 Timeout</li></Link>
   <Link to ={ "/Menu"}> <li>T20 Time Out</li></Link>
   <Link to ={"/Menu"}> <li>Fantacy Pick</li></Link>
    <Link to = {"/Manu"}> <li>ICC Rankings</li> </Link>  
  </ul>
 </div>
 <div className='lef-Sider-div0'>
  <h6> ESPNcricinfo Apps</h6>
  <hr/>
  <ul>
    <li>Android App</li>
    <li>iOS App</li>  
  </ul>
 </div>
 <div className='lef-Sider-div0'>
  <h6> Follow ESPNcricinfo</h6>
  <hr/>
  <ul>
    <li>Instagram</li>
    <li>Twitter</li>
    <li>Facebook</li>
    <li>Youtube</li>  
  </ul>
 </div>
 <div className='lef-Sider-div0'>
  <h6> ESPN  Sites</h6>
  <hr/>
  <ul>
    <li>The Cricket Monthly</li>
    <li>ESPN</li>  
  </ul>
 </div> */}
</div>
{/* <div className='right-Sider'>
<div class ="right-0">
<h6><b>Qued-E-Azam Trophy</b></h6>
<hr/>
<h5 style={{color : 'red'}}>Not Covered Live</h5>
<br/>
<ul class ="d">
  <b>
  <li class ="list 0">Sindh <BsDot/>  <h5> <Data  d1= {cricket} /></h5> </li>
  </b>
  <li class ="list 1">Baluchistan</li>  
</ul>
<h6>Sindh chose to bat.</h6>
<hr/>
<h5 style={{color : 'red'}}>Not Covered Live</h5>
<br/>
<ul class ="d">
  <b>
  <li class ="list 0">Southern Punjab(Pakistan)  <BsDot/> <h5> ({cricket1.over}) {cricket1.run }/ {cricket1.out}</h5></li>
  </b>
  <li class ="list 1">Central Punjab(Pakistan)</li> 
</ul>
<h6>Southern PUNJAB chose to field.</h6>
<hr/>
<h5 style={{color : 'red'}}>Not Covered Live</h5>
<br/>
<ul class ="d">
  <li class ="list 0">Northern (Pakistan)</li>
 <b>
  <li class ="list 1">Khyber Pakhunkhua  <BsDot/>  <h5> ( {cricket2.over} ) { cricket2.run } / {cricket2.out}</h5> </li>
  </b>
</ul>
<h6>Khyber Trail by 217 runs.</h6>
</div>
</div> */}
</div >
<div class="footer">
<div class="container">
  <div class="row">
    <div class="col">
      <h6>Key Series</h6>
      <hr/>
      <p>Austerlia VS England</p>
      <p>Afghanistan VS India</p>
      <p>India VS Pakistan</p>
      <p>New Zealand VS India</p>
      <p>Sri lanka VS Afghanistan</p>
      <p>Austerlia Vs west indies</p>
      <p>Irland vs pakistan</p>
      <p>QEA Trophy</p>
      <p>Women WBBL</p>
      <p>Marsh cup</p>
      <p>Women championship</p>
      <p>World cup Super league</p>
      
    </div>
          <div class="col">
          <h6>Quick Links</h6>
          <hr></hr>
          <p> T20 Timeout</p>
          <p > T20 Time Out</p>
          <p> Fantasy Pick</p>
          <p > IIC Rankings</p>
    </div>
    <div class="col">
          <h6>ESPNcricinfo Apps</h6>
          <hr></hr>
          <p > Andriod App</p>   
          <p > iOS App</p>
    </div>
    <div class="col">
          <h6>Follow ESPN cricinfo</h6>
          <hr></hr>
          <p > Inatagram</p>      
          <p > Twitter</p>
          <p  > Facebook</p>
          <p  > Youtube</p>
    </div>
    <div class="col">
          <h6>ESPN Sites</h6>
          <hr></hr>
          <Link to = {"/Qea1"}>
          <p>The cricket Monthly</p></Link>
          
          <p > ESPN</p>
    </div>
    </div>
    </div>
    </div>
   
</div>
  
  )
}
