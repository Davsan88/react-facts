import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">         
        <img src="/logo512.png" alt="React logo for ReactFacts"/>
        <h1>ReactFacts</h1>
      </div>
      <h3>React Course - Project 1</h3>
    </nav>
  )
}

export default Navbar
