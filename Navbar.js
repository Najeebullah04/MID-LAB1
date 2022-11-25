import React from 'react'
import {BsMoon,BsSearch,BsBell} from 'react-icons/bs'
import{GrApps} from 'react-icons/gr'
import {MdArrowForwardlc} from "react-icons/md"
import './Menu.css';
export default function Navbar() {
  return (
    <div>
        <nav  className='navbar' class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">LiveScores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Series</a>
        </li>
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
    </div>
  )
}
