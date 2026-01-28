import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Layout from './Pages/Admin/Layout'
import Dashboard from './Pages/Admin/Dashboard'
import AddBlog from './Pages/Admin/AddBlog'
import Listblog from './Pages/Admin/Listblog'
import Comments from './Pages/Admin/Comments'
import Login from './Components/Admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/Admin' element={true ? <Layout/> : <Login/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='addBlog' element={<AddBlog/>}/>
        <Route path='listBlog' element={<Listblog/>}/>
        <Route path='comments' element={<Comments/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
