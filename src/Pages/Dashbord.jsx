import React from 'react'
import { useAuth } from '../context/AuthContext';

function Dashbord() {

    const {user, logout} = useAuth();

  return (
    <div className='card'>
       <h2>Dashbord</h2>
       <p>You are logged in as: <strong>{user?.
       email}</strong>
       </p>
       <button onClick={logout}>Sign out</button>
    </div>
  )
}

export default Dashbord;