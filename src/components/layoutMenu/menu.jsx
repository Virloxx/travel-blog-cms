"use client"
import React from 'react'

function Menu(props) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li><a href="index.html">Home</a></li>
          <li><a href="generic.html">Generic</a></li>
          <li><a href="elements.html">Elements</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
        <a href="#" onClick={props.close} className="close">Close</a>
      </div>
    </nav>
  )
}

export default Menu