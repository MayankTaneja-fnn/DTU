import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import StudentHeader from '../Student/StudentHeader.jsx';


function Faculty_Display_log() {
  let location = useLocation();
  const [log, setLog] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const id = location.state.key;
  const navigate = useNavigate();


  useEffect(() => {
    const fetchLog = async () => {
      try {
        console.log("Fetching log data");
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/logs/getLog/${id}`, {
          withCredentials: true // Include cookies with the request
        });
        setLog(response.data.data);

      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching logs");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLog();
  }, [id]);

  useEffect(() => {
    if (log) {
      setEmail(log.email);
    }
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


  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#f0f9ff] flex flex-col justify-center items-center">
        <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <div className="text-xl font-semibold text-blue-900">Loading log details...</div>
      </div>
    );
  }

  if (!Array.isArray(log.photos) || log.photos.length <= 0) {
    return (
      <div className="w-full min-h-screen bg-[#f0f9ff] flex flex-col justify-center items-center">
        <StudentHeader userType="faculty" />
        <div className="flex flex-col items-center mt-20">
          <p className="text-red-500 text-lg">No data available for this log.</p>
          <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 hover:underline">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f0f9ff] font-sans pb-10">
      <StudentHeader userType="faculty" />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <button onClick={() => { navigate("/faculty/student_logs", { state: { key: email } }) }} className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FaArrowAltCircleLeft className='w-8 h-8 mr-2 group-hover:-translate-x-1 transition-transform' />
            <span className="text-lg font-medium">Back to Logs</span>
          </button>
        </div>


        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-center">
            {error}
          </div>
        )}

        {/* Main Content Card */}
        <div className='bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-50'>

          {/* Image Slider */}
          <div className='relative w-full bg-gray-100 h-96 md:h-[500px] flex items-center justify-center'>
            {log.photos.length > 1 && (
              <>
                <FaArrowAltCircleLeft
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-5xl cursor-pointer z-10 transition-colors drop-shadow-md'
                  onClick={prevSlide}
                />
                <FaArrowAltCircleRight
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-5xl cursor-pointer z-10 transition-colors drop-shadow-md'
                  onClick={nextSlide}
                />
              </>
            )}

            {log.photos.map((photo, index) => (
              <div
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'}`}
                key={index}
              >
                <img src={photo} alt={`Log Image ${index + 1}`} className='w-full h-full object-contain' />
              </div>
            ))}

            {/* Dots Indicator */}
            {log.photos.length > 1 && (
              <div className="absolute bottom-4 flex space-x-2">
                {log.photos.map((_, idx) => (
                  <div key={idx} className={`h-2 w-2 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'}`}></div>
                ))}
              </div>
            )}
          </div>

          {/* Log Details */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 pb-6">
              <h1 className="text-3xl font-bold text-blue-900 font-serif mb-2 md:mb-0">
                {log.title || "No Title Available"}
              </h1>
              <div className="text-right">
                <span className="block text-sm text-gray-500 uppercase tracking-wide">Created Date</span>
                <span className="text-lg font-medium text-blue-600">{log.createdAt ? log.createdAt.slice(0, 10) : "N/A"}</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Created By</p>
              <p className="text-lg font-medium text-gray-800">{log.fullName || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Description</p>
              <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                {log.description || "No Description Available"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Faculty_Display_log;
