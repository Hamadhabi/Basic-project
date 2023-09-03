import React from 'react'
import './Nav.css';
export default function Navbar(props, li= "menu") {
  return (
    <div>
      <nav>
        <div className="logo">
      <img src="/images/logo.png" alt="" />
     
          <li href ="#">{props.name}</li>
          <li href ="#">Location</li>
          <li href ="#">About</li>
          <li href ="#"> Contect</li>
        </div>
       
        <button className='btn'>Login</button>
     
          
        
      </nav>
    </div>
  )
}
