import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className="form">
        <span>
            <h1>We are your team.</h1>
            <h3>Always together.</h3>
        </span>
        <div className='inputs'>
            <span>
            <p>Name</p>
            <input type="text" placeholder='Enter your name' />
            </span>
            <span>
            <p>Email</p>
            <input type="text" placeholder='Enter your email' />
            </span>
        </div>
        <span>
            <p>Message</p>
            <input type="text" placeholder='Enter your message' />
        </span>
        <button className='btn'>Send</button>
    </div>
  )
}

export default Form