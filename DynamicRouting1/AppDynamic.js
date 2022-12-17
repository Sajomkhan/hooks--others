import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//pages
import Blogs from './Blogs'
import Contact from './Contact'
import Home from './Home'
import Error from './Error';
import NavBar from './NavBar'
import Blog from './Blog'

const AppDynamic = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/blogs/:title' element={<Blog/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppDynamic