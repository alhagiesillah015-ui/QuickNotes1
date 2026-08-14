import React from 'react'
import Landing from './routes/Landing'
import { Routes,Route,Navigate, } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/Signup'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default App

      

       