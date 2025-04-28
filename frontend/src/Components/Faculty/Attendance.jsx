import React, { useState, useEffect } from 'react';
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function Attendance() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [highlightDates, setHighlightDates] = useState([]); // Initialize with an empty array
  const [studentInfo, setStudentInfo] = useState({ name: '', rollNo: '' });
  const [error, setError] = useState("");
  const email = location.state.key || ''; // Ensure 'key' is accessed safely

  const handleLogOut = () => {
    axios.post("http://localhost:3000/faculty/logOut", {}, { withCredentials: true })
      .then(function (response) {
        console.log("logout successful", response);
        navigate("/faculty/login");
      })
      .catch(function (errors) {
        console.log(errors);
      });
  };

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.post(`${import.meta.env.BACKEND_URL}/faculty/get_attendance`, {
          email: email
        }, {
          withCredentials: true
        });

        const attendanceData = response.data.data || {};
        console.log(attendanceData);
        setHighlightDates(attendanceData.attendance || []);  // Default to an empty array if undefined
        setStudentInfo({
          name: attendanceData.fullName || 'N/A',   // Set default 'N/A' if name is missing
          rollNo: attendanceData.roll_no || 'N/A'    // Set default 'N/A' if rollNo is missing
        });
      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching attendance");
        console.error(err);
      }
    };

    fetchAttendance();
  }, [email]);

  

  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isHighlighted = (date) => {
    const dateString = formatDate(date);
    return highlightDates.includes(dateString); // Ensure highlightDates is an array
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
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
        <div className="flex items-center">
          <img src="../../../logo/G20Whiteback_processed-removebg-preview__2_-removebg-preview.png" alt="G20 Image" className="h-16 w-28 ml-12" />
          <button className="bg-white ml-16 text-red-700 font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300" onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <FaArrowAltCircleLeft className='text-blue-800 w-8 h-8 cursor-pointer' onClick={() => { navigate("/faculty/student_display") }} />
      </div>
      {/* Student Info */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Student Name: {studentInfo.name}</h2>
        <h2 className="text-xl text-gray-600 mt-2">Roll No.: {studentInfo.rollNo}</h2>
        <h2 className="text-xl text-gray-600 mt-2">Total Attendance: {highlightDates.length}</h2>
        <h2 className="text-xl text-gray-600 mt-2">Dates on which student was present: {highlightDates.map((date,index)=>(
          <span key={index}>{date} {index==highlightDates.length-1?null:', '}</span>
        ))}</h2>
        
      </div>

      {/* Calendar Section */}
      <div className="flex w-full justify-center py-10">
        <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] md:w-[60%] ">
          <div className='w-full flex justify-center'>
          <Calendar 
            onChange={changeValue}
            value={date}
            tileClassName={({ date }) => isHighlighted(date) ? 'highlight' : ''}
            className="rounded-lg w-full"
          />
          </div>
          <p className="text-lg font-semibold text-center mt-4 text-gray-700">
            Selected Date: <span className="text-blue-600">{date.toLocaleDateString()}</span>
          </p>
        </div>
      </div>

      {/* Add some custom styling for highlighted dates */}
      <style>{`
        .highlight {
          background-color: #ffdd57 !important;
          color: black !important;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Attendance;
