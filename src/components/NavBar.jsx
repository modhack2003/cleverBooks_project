import React from 'react'
import { VscAzure } from "react-icons/vsc";
import {Link} from "react-router-dom" 
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className='container'>
      <VscAzure className='logo' />
        <ul>
          <li>product</li>
          <li>pricing</li>
          <li>industry</li>
          <li> Services</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <div className='btn-container'>
          <button className='btn-login'>Log In</button>
          <button className='btn-talk'>Talk to us</button>
        </div>
    </div>
  )
}

export default NavBar