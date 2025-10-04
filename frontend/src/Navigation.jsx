import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Landing_page from './Landing_page/Landing_page'
import Login from './Login/Login'
import Register from './Register/Register'



const Navigation = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing_page/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
