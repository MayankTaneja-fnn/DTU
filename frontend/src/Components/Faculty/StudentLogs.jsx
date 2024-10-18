import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';

const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function Logs() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let email = location.state.key;

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.post("http://localhost:3000/logs/getLogs", {
          email: email
        }, {
          withCredentials: true // Include cookies with the request
        });
        setLogs(response.data.data);
      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching logs");
        console.error(err);
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

  const handleLogOut = () => {
    axios.post("http://localhost:3000/faculty/logOut", {}, {
      withCredentials: true
    })
      .then(response => {
        console.log("Logout successful", response);
        navigate("/faculty/login");
      })
      .catch(errors => {
        console.log(errors);
      });
  };

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

      {/* Navigation Back Button */}
      <div className="flex justify-center mb-4">
        <FaArrowAltCircleLeft className='text-blue-800 w-8 h-8 cursor-pointer' onClick={() => { navigate("/faculty/student_display") }} />
      </div>

      {/* Main Content */}
      <div className="pt-8 flex flex-col items-center">
        <div className="w-full flex justify-center mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search by title or date"
            className="border-2 border-gray-300 rounded-full py-2 px-4 w-1/2 transition duration-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-2 w-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="text-center w-full mb-4">
          <h2 className="text-xl font-semibold">Student Name: {name || "User"}</h2>
          <h2 className="text-xl font-semibold">Student Roll No.: {roll_no || "Not Available"}</h2>
          <h2 className="text-xl font-semibold">Total logs: {logs.length || "0"}</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4'>
          {filteredLogs.map((log, index) => (
            <div
              key={index}
              onClick={() => displayLog(log)}
              className="bg-white border-2 border-gray-300 rounded-lg shadow-lg transition-shadow duration-300 cursor-pointer hover:shadow-xl"
            >
              <img
                src={log.photos[0]}
                alt={log.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="font-bold text-lg text-gray-800">{log.title}</div>
                <div className="text-sm text-gray-500">{log.createdAt.slice(0, 10)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logs;
