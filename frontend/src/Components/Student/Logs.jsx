import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StudentHeader from './StudentHeader.jsx';


function Logs() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Logs
        const logsResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logs/getLogs`, {}, {
          withCredentials: true
        });
        setLogs(logsResponse.data.data);

        // Fetch Student Name
        const nameResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/student/get_name`, {
          withCredentials: true
        });
        if (nameResponse.data && nameResponse.data.data) {
          setName(nameResponse.data.data.fullName);
        }

      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching data");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const displayLog = (log) => {
    navigate(`/student/display_log`, { state: { key: log._id } });
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
      <StudentHeader userType="student" />

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 font-serif">
            My Logs <span className="text-lg font-normal text-gray-500 ml-2">Welcome, {name || "Student"}</span>
          </h2>
          <button
            className='bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-[1.02]'
            onClick={() => { navigate("/student/add_log") }}
          >
            + Create New Log
          </button>
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

        {/* Logs Grid */}
        {filteredLogs.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredLogs.map((log, index) => (
              <div
                key={index}
                onClick={() => displayLog(log)}
                className='group bg-white rounded-2xl shadow-lg border border-blue-50 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'
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

                <div className='p-6'>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-blue-900 line-clamp-1">{log.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-mono bg-blue-50 inline-block px-3 py-1 rounded-full">
                    {new Date(log.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No logs found. Create your first log!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Logs;
