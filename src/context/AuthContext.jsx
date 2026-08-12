import React from 'react'
import { createContext,useContext,useEffect,
    useState } from 'react'
    import { onAuthStateChanged,signOut } from 
    'firebase/auth'

import { auth, db} from '../Firebase';

    const AuthContext = createContext();

   export function AuthProvider({children}){
      const [user, setUser]= useState(null);
      const [loading, setLoading]= useState
       (null);

     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,
           (firebaseUser)=>{
                setUser(firebaseUser);
             setLoading(false);
           });

         return ()=> unsubscribe();
     },[]);

     const logout =()=>signOut(auth);

       return(
       <AuthContext.Provider value={{user,loading,
       logout}}>
         {children}
      </AuthContext.Provider>
      )
   }

    export function useAuth(){
      return useContext(AuthContext);
   }

