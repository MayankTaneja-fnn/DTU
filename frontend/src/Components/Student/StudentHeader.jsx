import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function StudentHeader() {
    const navigate=useNavigate();
    const handleLogOut=()=>{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/logOut`,{},{
          withCredentials:true
        })
        .then(function(response){
          console.log("logout successful",response);
          navigate("/login");
        })
        .catch(function(errors){
          console.log(errors);
        })
      }
    const location=useLocation();
    console.log(location);
  return (
    <div>
        <div className='fixed z-50 w-screen'>
      <div className="images flex flex-col md:flex-row bg-[#c4ecfc] w-full h-auto md:h-24 items-center p-4 md:py-0 relative">
        {/* DTU Logo */}
        <img
          src="../../logo/DTU_official_logo.png"
          alt="DTU Logo"
          className="h-20 w-32 md:h-20 md:w-28 mb-4 md:mb-0 px-2"
        />

        {/* Department Information */}
        <div className="text-center md:text-left md:ml-4 -mt-2 md:-mt-3">
          <h1 className="text-lg md:text-2xl font-bold font-sans">
          Centre of Extension and Field Outreach
          </h1>
          <h2 className="text-sm md:text-lg">Delhi Technological University</h2>
        </div>

        {/* G20 Image */}
        <img
          src="../../logo/G20Whiteback_processed.jpg"
          alt="G20 Image"
          className="h-16 w-28 md:h-20 md:w-32 mt-4 md:mt-0 md:ml-auto px-2"
        />
          
          <div className={`${location.pathname=="/student/register"||"/student/login"?'hidden':'block'} mt-4 z-50 md:mt-0 md:ml-4 border-2 border-solid 
          border-blue-900 text-center font-mono text-sm md:text-lg 
          rounded-md w-24 h-10 flex items-center justify-center relative cursor-pointer`} onClick={handleLogOut}>LogOut</div>
        </div>
        </div>
    </div>
  )
}

export default StudentHeader
