import React from 'react'
import Marquee_logo from './components/Marquee_logo'
import Desk from "./assets/desk.jpg"
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import "./App.css"
import Desk_img from './components/Desk_img'



const App = () => {
  return (
    <div>
      <div className='patten'>
        <NavBar className="nav" />
        <div className='text-container'>
          <h2>Build and automate custom S&OP workflows</h2>
          <p>More than just a supply chain planning tool - with the capability to completely transform your work processes. Designed specifically to eliminate the inefficiencies commonly found in traditional methods, resulting in improved accuracy, fill rate, and productivity.</p>
          <button>Get started with Crest</button>
          <div className='img-container'><Desk_img/></div>
        </div>

      </div>
      <Marquee_logo />
    </div>
  )
}

export default App