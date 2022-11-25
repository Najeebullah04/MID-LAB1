
import { Link} from 'react-router-dom'
import React, { useState } from 'react'
import {BsDot,BsMoon,BsSearch,BsBell} from 'react-icons/bs'
import{GrApps} from 'react-icons/gr'
import {MdArrowForwardlc} from "react-icons/md"
import './Menu.css';
import Data from './Data'
export default function Qea(props) {
   
  return (
    <div>
<div className='right-Sider'>
<div class ="right-0">
<h6><b>Qued-E-Azam Trophy</b></h6>
<hr/>
<h5 style={{color : 'red'}}>Not Covered Live</h5>
<br/>
<ul class ="d" >
  <b>
  <li class ="list 0">Sindh <BsDot/>  <h5>   {props.d1.over} {props.d1.run} / {props.d1.out} </h5> </li>
  </b>
  <li class ="list 1">Baluchistan</li>  
</ul>
<h6>Sindh chose to bat.</h6>
<hr/>
<h5 style={{color : 'red'}}>Not Covered Live</h5>
<br/>
<ul class ="d">
  <b>
  <li class ="list 0">Southern Punjab(Pakistan)  <BsDot/> <h5> {props.d.over} {props.d.run} / {props.d.out}</h5></li>
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
  <li class ="list 1">Khyber Pakhunkhua  <BsDot/>  <h5> {props.d2.over} {props.d2.run} / {props.d2.out}</h5> </li>
  </b>
</ul>
<h6>Khyber Trail by 217 runs.</h6>
</div>
</div>

    </div>
  )
}
