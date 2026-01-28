import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function StudentHeader({ userType = "student" }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    const logoutEndpoint = userType === "faculty"
      ? `${import.meta.env.VITE_BACKEND_URL}/faculty/logOut`
      : `${import.meta.env.VITE_BACKEND_URL}/student/logOut`;

    const loginPath = userType === "faculty" ? "/faculty/login" : "/student/login";

    axios.post(logoutEndpoint, {}, {
      withCredentials: true
    })
      .then(function (response) {
        console.log("logout successful", response);
        navigate(loginPath);
      })
      .catch(function (errors) {
        console.log(errors);
      })
  }

  return (
    <div className="flex flex-col md:flex-row bg-[#c4ecfc] w-full h-auto md:h-28 items-center p-4 md:py-0 relative shadow-sm z-50">
      {/* Left Section */}
      <div className="flex items-center md:w-[70%]">
        {/* DTU Logo */}
        <img
          src="/logo/DTU_official_logo.png"
          alt="DTU Logo"
          className="h-16 w-auto md:h-20 md:w-auto mr-4"
        />

        {/* Department Information */}
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-bold font-serif text-blue-900">
            Centre of Extension and Field Outreach
          </h1>
          <h2 className="text-sm md:text-lg font-serif text-gray-700">
            Delhi Technological University
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center mt-4 md:mt-0 md:ml-auto gap-6">
        <img
          src="/logo/G20Whiteback_processed-removebg-preview__2_-removebg-preview.png"
          alt="G20 Image"
          className="h-16 w-auto"
        />
        <button
          onClick={handleLogOut}
          className="bg-white text-blue-900 border border-blue-200 font-semibold px-6 py-2 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default StudentHeader
