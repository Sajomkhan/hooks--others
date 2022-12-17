import React from 'react'

//pages
import Blog from './Blog'
import Blogs from './Blogs'
import Contact from './Contact'
import Home from './Home'
import NavBar from './NavBar'
import Error from './Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './User'

const QueryRouting = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs/:title' element={<Blog/>} />
        <Route path='/*' element={<Error/>} />      
        <Route path='/user' element={<User/>} />
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default QueryRouting