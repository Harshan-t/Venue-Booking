import { useState } from 'react'
import './App.css'
import Landingpage from './pages/Landingpage.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='relative'>
        <Outlet />
      </div>
    </>
  )
}

export default App
