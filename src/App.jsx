import React from 'react'
import Landing from './routes/Landing'
import { Routes,Route,Navigate, replace, } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Navbar from './Components/Navbar'
import { useAuth } from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'
import Dashboard from './routes/Dashboard'
function App() {



const {loading, currentUser} = useAuth();

if(loading){
  return (<div className='min-h-screen bg-slate-50 flex item-center
   justify-center'>
        <div className='animate-pulse text-indigo-600
        text-xl'>Loading QuickNotes</div>
  </div>)
}



  return (
    <>
     <div className='min-h-screen bg-slate-50'>

   
      <Navbar/>
      <Routes>
        <Route 
        path='/'
        element={
          currentUser ? (<Navigate to=
        "/dashboard" replace/>): (
          <Landing/>
        )}/>
     
        <Route
         path='/login'
        element={
          currentUser ? (<Navigate to=
        "/dashboard" replace/>): (
          <Login/>
        )}/>


        <Route path='/signup'
        element={
          currentUser ? (<Navigate to=
        "/dashboard" replace/>): (
          <Signup/>
        )}/>
       
       <Route path='/dashboard' element={
        <ProtectedRoute>
          <dv className='container mx-auto px-4 py-8'>
             <Dashboard/>
          </dv>
        </ProtectedRoute>
       }/>
      </Routes>

        </div>
    </>
  )
}

export default App

      

       