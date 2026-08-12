import React from 'react'
import {BrowserRouter,Routes,Route,Link, Navigate} from 'react-router-dom'
import Signup from './Pages/Signup'
import  Signin from './Pages/Signin'
import Home from './Pages/Home'
import "./styles/global.css";
import { useAuth } from './context/AuthContext'
import Dashbord from './Pages/Dashbord'




function ProtectedRoute({children}){
  const{user,loading}= useAuth();
  if(loading){
  return <p style={{padding:"24"}}>Loading ...</p>
}
  return user ? children : <Navigate to="signin" 
  replace/>
}


  export default function App() {
  

const {user,loading}= useAuth();

if(loading){
  return <p style={{padding:"24"}}>Loading ...</p>
}
  
   
  return (
    <>
    <BrowserRouter>
    <div>
      <h1>Firebase Auth Demo</h1>
      <nav style={{marginBottom: "24px"}}>
        {!user && (
          <>
           <Link className='btn' to='/signup'>
        Signup
        </Link>
        <Link className='btn' to='/signin'>
        Signin
        </Link>
       
        </>
        )}
        { user &&
        <>
        <Link className='btn' to='/
        dashbor'>
         Dashbord
        </Link>
        </>
        }
      </nav>
    </div>
    <Routes>
       <Route path='/home' element={<Home/>}/>

      <Route path='/signup'element={user ? <Navigate to="/dashbord"/>:<Signup/>}/>
     
     
     
     
 
      <Route path='/signin'element={user ? <Navigate to="/dashbord"/>:<Signin/>} />
     
      
     
      

      

       


     <Route path='/dashbord'
      element={<ProtectedRoute>
        <Dashbord/>
      </ProtectedRoute>}/>
      
    </Routes>
    </BrowserRouter>
    </>
      
  
  )
}


