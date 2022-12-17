import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    
  return (
    <div style={{hight: "50px", margin: "30px"}}>
        <h1>Error</h1><br/><br/>
        <button onClick={()=> {navigate('/')}} >Home</button>
    </div>
  )
}

export default Error