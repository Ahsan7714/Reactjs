import React from 'react'
import "./Hero.css"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"


const Hero = () => {
  return (
    <div className="Hero">
        <hr />
        <span><h1>We are your UX design partner</h1></span>
        <span><p>We create,deliver,and optimize engaging UX designs for your digital advancement</p></span>
        <button className='btn'>Why US?</button>
        <hr />
        <div className="Hero-1">
            <span><h3>Trusted by teams from leading companies</h3></span>
            <span>
                <img src={logo2} alt="" />
                <img src={logo1} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </span>
        </div>
        <hr />  
    </div>
  )
}

export default Hero