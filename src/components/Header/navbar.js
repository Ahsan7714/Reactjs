import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <div className="navbar">
        <div className='logo'>Company Name</div>
        <span>
            <p>What</p>
            <p>Work</p>
            <p>Why</p>
        </span>
        <span>
            <p>Contact</p>
            <p id='btn'>Request more info</p>
        </span>
    </div>
  )
}

export default navbar