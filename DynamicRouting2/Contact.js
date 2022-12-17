import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigation = useNavigate()
  return (
    <div>
        <h1>Contact</h1>
        <p>Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p>
        <button onClick={()=>{navigation('/')}} >Home</button>
    </div>
  )
}

export default Contact