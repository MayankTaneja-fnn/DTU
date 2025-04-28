import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function Logs() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logs/getLogs`, {}, {
          withCredentials: true // Include cookies with the request
        });
        setLogs(response.data.data);
      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching logs");
        console.error(err);
      }
    };

    fetchLogs();
  }, []);

  useEffect(() => {
    if (logs.length > 0) {
      setName(logs[0].fullName);
    }
  }, [logs]);

  const handleLogOut = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/logOut`, {}, {
      withCredentials: true
    })
      .then(response => {
        console.log("logout successful", response);
        navigate("/student/login");
      })
      .catch(errors => {
        console.log(errors);
      });
  };

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
    <div className="min-h-screen bg-gray-100">
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

      {/* Main Content */}
      <div className="pt-16 flex flex-col items-center">
        <div className="w-full flex justify-center mb-6">
          <input
            className="border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-[50%] px-4 py-2"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search by title or date"
          />
          <button className="ml-2 w-20 px-4 py-2 text-black rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="text-center w-full mb-4">
          <h2 className="text-xl font-semibold">Hello, {name || "User"}</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4'>
          {filteredLogs.map((log, index) => (
            <div key={index} onClick={() => displayLog(log)} className='bg-white p-4 border-2 border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer'>
              <div className='flex justify-center mb-4'>
                <img src={log.photos[0]} alt={log.title} className="w-full h-40 object-cover rounded-lg" />
              </div>
              <div id='title' className="font-bold text-lg text-gray-800">{log.title}</div>
              <div id='date' className="text-sm text-gray-500">{log.createdAt.slice(0, 10)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logs;
