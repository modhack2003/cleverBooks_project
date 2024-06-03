import React from 'react'
import Marquee_logo from './components/Marquee_logo'
import Desk from "./assets/desk.jpg"
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import "./App.css"
import Desk_img from './components/Desk_img'
import Image1 from "./assets/1.jpg"
import Image2 from "./assets/2.jpg"
import Image3 from "./assets/3.jpg"
import Image4 from "./assets/4.jpg"




const App = () => {
  return (
    <div>
      <div className='hero'>
        <div className='patten'>
          <NavBar className="nav" />
          <div className='text-container'>
            <h2>Build and automate custom S&OP workflows</h2>
            <p>More than just a supply chain planning tool - with the capability to completely transform your work processes. Designed specifically to eliminate the inefficiencies commonly found in traditional methods, resulting in improved accuracy, fill rate, and productivity.</p>
            <button>Get started with Crest</button>
            <div className='img-container'><Desk_img /></div>
          </div>
        </div>
      </div>
      <div className='flex_container'>
        <h1>Unite, collaborate and create your process, your way.</h1>
        <p>Eliminate operating in silos and bring enhanced clarity and organisational alignment ensuring no more hassle for project managers who have to coordinate between teams and tasks.</p>
        <div className="tabs">
          <div className='text-tabs'> <h2>Orchestrate your supply chain</h2>
          <p>Streamline your Sales and Operations planning workflow and get visibility on all the steps and associated stakeholders involved. Manage your demand, purchase and distribution planning decisions from one window and orchestrate your supply chain proactively with more agility and responsiveness.</p>
          </div>
          <div className='img-tabs'><img src= {Image1} alt="IMAGE1" /> </div>
        </div>
        <div className="tabs">
        <div className='text-tabs'>
          <h2>Go beyond spreadsheets</h2>
          <p>By analysing and utilising data, including customer purchasing patterns, you can enhance inventory management, eliminate additional spreadsheet management, and achieve continual improvement in predictability, avoiding overstocking and under-stocking through our always-learning AI and ML.</p>
          </div>
          <div className='img-tabs'><img src= {Image2} alt="IMAGE1" /> </div>
        </div>
        <div className="tabs">
        <div className='text-tabs'>
          <h2>Automate Data Pipelines & Supply Chain Processes</h2>
          <p>Easily construct your own sales and operation planning workflows using helix's comprehensive suite of features, much like assembling a Lego set. By leveraging modules such as demand forecasting, purchase planning, and distribution planning, you can automate the entire process, leading to a decrease in errors and a reduction in overall efforts required.</p>
          </div> 
          <div className='img-tabs'><img src= {Image3} alt="IMAGE1" /> </div>
          </div>
        <div className="tabs">
        <div className='text-tabs'>
          <h2>Take matters into your own hands by using SQL</h2>
          <p>Utilise the capabilities of SQL in helix to apply constraints, filter data, or execute transformations. You have the flexibility to include a custom inventory buffer or establish dynamic inventory limits for any specific SKU.</p>
          </div>
          <div className='img-tabs'><img src= {Image4} alt="IMAGE1" /> </div>
        </div>
      </div>
      <div className='Marquee'><Marquee_logo /></div>
    </div>
  )
}

export default App