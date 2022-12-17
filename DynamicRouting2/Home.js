import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h2>Home Page</h2>
        <h4>List of pages</h4>
        <ul>
            <li>Home Page</li>
            <li>Blogs Page</li>
            <li>Contact Page</li>
            <li>Error Page</li>
            <li>Blogs page/ Blog Page</li>
            
        </ul>
        <h4><u>Description various type of Programing Language:</u></h4>
        <p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>
        <p>Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p>
        <button onClick={()=> {navigate('/blogs')}} >Blogs</button>
    </div>
    
  )
}

export default Home