import React from 'react'
import "./Headline.css"
import tick from "./tick.png"
import img from "./images.jpg"

const Headline = () => {
  return (
    <div className="container">
        <div className="headline-1">
          <div className="left-1">
            <span>
              <h1>Headline</h1>
              <h3>Subtitle</h3>
              <p>Lorem ipsum dolor</p>
            </span>
            <span className='para'>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
            </span>
            <button className='btn'>Read more</button>
          </div>
          <div className="right-1">
            <img src={img} alt="" />
          </div>
        </div>
        <hr />
        <div className="headline-2">
          <div className="left-2">
            <img src={img} alt="" />
          </div>
          <div className="right-2">
          <span>
              <h1>Headline</h1>
              <h3>Subtitle</h3>
              <p>Lorem ipsum dolor</p>
            </span>
            <span className='para'>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
            </span>
            <button className='btn'>Read more</button>
          </div>
        </div>
        <hr />
        <div className="headline-1">
          <div className="left-1">
            <span>
              <h1>Headline</h1>
              <h3>Subtitle</h3>
              <p>Lorem ipsum dolor</p>
            </span>
            <span className='para'>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
              <span><img src={tick} alt=''/><p>Lorem ipaum dolor</p></span>
            </span>
            <button className='btn'>Read more</button>
          </div>
          <div className="right-1">
            <img src={img} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Headline