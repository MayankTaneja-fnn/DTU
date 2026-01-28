import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import StudentHeader from '../Student/StudentHeader.jsx';


function Logs() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();
  let location = useLocation();
  let email = location.state.key;

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logs/getLogs`, {
          email: email
        }, {
          withCredentials: true // Include cookies with the request
        });
        setLogs(response.data.data);
      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching logs");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, [email]);

  useEffect(() => {
    if (logs.length > 0) {
      setName(logs[0].fullName);
      setRoll_no(logs[0].roll_no);
    }
  }, [logs]);


  const displayLog = (log) => {
    navigate(`/faculty/display_log`, { state: { key: log._id } });
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const filteredLogs = logs.filter(log =>
    log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.createdAt.slice(0, 10).includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#f0f9ff] font-sans">
      <StudentHeader userType="faculty" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Back */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => { navigate("/faculty/student_display") }} className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FaArrowAltCircleLeft className='w-8 h-8 mr-2 group-hover:-translate-x-1 transition-transform' />
            <span className="text-lg font-medium">Back to Students List</span>
          </button>

          <div className="text-right">
            {name && (
              <div>
                <span className="text-gray-500 mr-2">Viewing Logs for:</span>
                <span className="font-bold text-blue-900 text-lg">{name}</span>
                {roll_no && <span className="text-gray-400 font-mono ml-2">({roll_no})</span>}
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xl">
            <input
              className="w-full px-6 py-3 bg-white border border-blue-100 rounded-full shadow-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all pl-12"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search logs by title or date..."
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center">
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2 text-blue-600 mt-12">
              <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg font-medium">Loading logs...</span>
            </div>
          ) : (
            filteredLogs.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                {filteredLogs.map((log, index) => (
                  <div
                    key={index}
                    onClick={() => displayLog(log)}
                    className="group bg-white rounded-2xl shadow-lg border border-blue-50 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className='relative h-56 overflow-hidden'>
                      <img
                        src={log.photos[0]}
                        alt={log.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white font-medium">View Details</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-xl text-blue-900 mb-2 line-clamp-1">{log.title}</h3>
                      <p className="text-sm text-gray-500 font-mono bg-blue-50 inline-block px-3 py-1 rounded-full">
                        {log.createdAt.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No logs found for this student.</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Logs;
