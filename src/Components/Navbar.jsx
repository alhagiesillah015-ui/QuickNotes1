import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Notebook, LogOut, User  } from "lucide-react";
import { useAuth } from "../Context/AuthContext";




function Navbar(){

   const navigate = useNavigate();
const { currentUser, loading, logout } = useAuth();



    const handlelogout = async()=>{
        try{
            await logout();

            navigate("/login")
        }catch(error){
            console.error("Failed to logout", error)
        }
    }


    return(
    <nav className="bg-white shadow-sm">
        <di className mx-auto px-4>
            <div className="flex justify-between items-center h-16">
                <Link to="/" className="flex items-center space-x-2">
                <Notebook className="h-8 w-8 text-indigo-600"/>
                <span className="text-xl font-semibold text-gray-900">
                    Quiknotes
                </span>
                </Link>


                <div className="flex items-center space-x-4">
                    {
                        currentUser ? (
                        <>
                        <div className="flex items-center text-sm 
                        text-gray-600">
                            <User className="h-4 w-4 mr-1"/>
                            <span className="hiden md:inline">{currentUser.email}</span>
                              
                        </div>

                        <button onClick={handlelogout} className="flex 
                        items-center text-sm font-medium text-gray-600
                        hover:text-indigo-600 transition-colors">

                            <LogOut className="h-4 w-4 mr-1"/>
                            <span>logout</span>
                        </button>
                        </>
                    ) : (
                        <div className="space-x-4">
                        <Link 
                        to="login"
                         className="text-sm font-medium text-gray-600
                         hover: text-indigo-600 transition-colors"
                         >
                        Login
                         </Link>
                   
                        <Link
                         to="signup"
                         className="text-sm font-medium text-white px-4
                         py-2 bg-indigo-600 rounded-md hover:bg-indigo-700
                         transtion-colors"
                         >
                            Signup
                        </Link>
                    </div>
                    )

                    }
                    
                </div>
            </div>
        </di>
    </nav>
)
}


export default Navbar;