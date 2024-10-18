import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';

const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function Student_Display_log() {
  let location = useLocation();
  const [log, setLog] = useState({});
  const [error, setError] = useState("");
  const id = location.state.key;
  const navigate=useNavigate();

  const handleLogOut = () => {
    axios.post("http://localhost:3000/student/logOut", {}, {
      withCredentials: true
    })
      .then(function (response) {
        console.log("logout successful", response);
        navigate("/student/login");
      })
      .catch(function (errors) {
        console.log(errors);
      })
  }

  useEffect(() => {
    const fetchLog = async () => {
      try {
        console.log("Fetching log data");
        const response = await axios.get(`http://localhost:3000/logs/getLog/${id}`, {
          withCredentials: true // Include cookies with the request
        });
        setLog(response.data.data);
      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching logs");
        console.error(err);
      }
    };

    fetchLog();
  }, []);

  useEffect(() => {
    console.log("Updated log:", log);
  }, [log]);

  const [current, setCurrent] = useState(0);
  const length = log.photos?.length || 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(log.photos) || log.photos.length <= 0) {
    return null;
  }



  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center bg-gradient-to-r from-[#d5f5fa] via-[#B2E9FD] to-[#8CD3FD] w-full h-auto md:h-32 p-4 md:py-0 relative">
          {/* Left Section */}
          <div className="flex md:flex-row w-[70%]">
          {/* DTU Logo */}
          <img
            src="../../logo/DTU_official_logo.png"
            alt="DTU Logo"
            className="h-20 w-32 md:h-24 md:w-28 mb-4 md:mb-0 px-1 opacity-85"
          />

          {/* Department Information */}
          <div className="text-center md:text-left md:ml-4 w-[70%] mt-2">
            <h1 className="text-lg md:text-3xl font-bold font-[Baskerville] text-white">
              <Head>Centre of Extension and Field Outreach</Head>
            </h1>
            <h2 className="text-sm md:text-lg font-[Georgia] text-slate-500 ml-1 mt-1">
              Delhi Technological University
            </h2>
          </div>
          </div>
          {/* Right Section */}
          <div className="flex items-center ">
            <img src="../../../logo/G20Whiteback_processed-removebg-preview__2_-removebg-preview.png" alt="G20 Image" className="h-16 w-28 ml-12" />
            <button className="bg-white ml-16 text-red-700 font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300" onClick={handleLogOut}>
              LogOut
            </button>
          </div>
      </div>
      <div>
        <FaArrowAltCircleLeft className='text-blue-800 w-6 h-6 cursor-pointer' onClick={()=>{navigate("/student/logs")}}></FaArrowAltCircleLeft>
      </div>
      
      {/* Error Message */}
      <div className='flex pt-32 justify-center'>
        {error && <p className="text-red-500 text-lg">{error}</p>}
      </div>

      {/* Main Content */}
      <div className=' h-auto -mt-10 flex flex-col items-center'>
        
        {/* Image Slider */}
        <section className='slider relative w-full md:w-3/4'>
          {/* Left Arrow */}
          {log.photos.length > 1 ? (
            <>
              <FaArrowAltCircleLeft 
                className='left-arrow absolute top-1/2 transform -translate-y-1/2 left-4 text-black text-4xl cursor-pointer z-10' 
                onClick={prevSlide} 
              />
              <FaArrowAltCircleRight 
                className='right-arrow absolute top-1/2 transform -translate-y-1/2 right-4 text-black text-4xl cursor-pointer z-10' 
                onClick={nextSlide} 
              />
            </>
          ) : null}

          {/* Image Display */}
          {log.photos.map((photo, index) => {
            return (
              <div
                className={`${index === current ? 'slide active' : 'slide'} w-full`}
                key={index}
              >
                {index === current && (
                  <img src={photo} alt='slider image' className='image w-[90%] ml-[5%] h-96 object-cover mx-auto rounded-lg shadow-md' />
                )}
              </div>
            );
          })}
        </section>

        {/* Log Details */}
        <div className="text-center mt-10 bg-white shadow-md p-6 rounded-lg w-3/4">
          <h1 id='title' className="text-2xl font-bold text-gray-800 mb-4">
            {log.title || "No Title Available"}
          </h1>
          <p id='createdBy' className="text-md text-gray-600 mb-2">
            <strong>Created By:</strong> {log.fullName || "N/A"}
          </p>
          <p id='createdAt' className="text-md text-gray-600 mb-2">
            <strong>Created At:</strong> {log.createdAt ? log.createdAt.slice(0, 10) : "N/A"}
          </p>
          <p id='description' className="text-md text-gray-600 mt-4">
            {log.description || "No Description Available"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Student_Display_log;
