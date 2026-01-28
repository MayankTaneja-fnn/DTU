import React, { useState, useEffect } from 'react';
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import StudentHeader from '../Student/StudentHeader.jsx';

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

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/faculty/get_attendance`, {
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
    <div className="min-h-screen bg-[#f0f9ff] font-sans">
      <StudentHeader userType="faculty" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <button onClick={() => { navigate("/faculty/student_display") }} className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FaArrowAltCircleLeft className='w-8 h-8 mr-2 group-hover:-translate-x-1 transition-transform' />
            <span className="text-lg font-medium">Back to Students List</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Student Info Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-50 h-full">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-100 pb-2">Student Details</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Name</p>
                  <p className="text-xl font-medium text-gray-800">{studentInfo.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Roll Number</p>
                  <p className="text-lg font-medium text-gray-800 font-mono">{studentInfo.rollNo}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Total Attendance</p>
                  <div className="flex items-center mt-1">
                    <span className="text-4xl font-bold text-blue-600">{highlightDates.length}</span>
                    <span className="text-gray-400 ml-2 text-sm">days present</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Previous Dates</p>
                <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto custom-scrollbar">
                  {highlightDates.map((date, index) => (
                    <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">
                      {date}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-50 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Attendance Calendar</h2>
              <div className='w-full max-w-md calendar-container'>
                <Calendar
                  onChange={changeValue}
                  value={date}
                  tileClassName={({ date }) => isHighlighted(date) ? 'highlight' : ''}
                  className="rounded-xl border-none shadow-sm w-full p-2"
                />
              </div>
              <p className="text-lg font-medium text-gray-600 mt-6 bg-blue-50 px-6 py-2 rounded-full">
                Selected Date: <span className="text-blue-700 font-bold ml-1">{date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add some custom styling for highlighted dates */}
      <style>{`
        .highlight {
          background-color: #10b981 !important;
          color: white !important;
          border-radius: 50%;
        }
        .react-calendar {
            border: none;
            font-family: inherit;
        }
        .react-calendar__tile {
            padding: 1rem 0.5rem;
        }
        .react-calendar__navigation button {
            color: #1e3a8a;
            font-size: 1.2rem;
        }
        .react-calendar__month-view__days__day--weekend {
            color: #ef4444;
        }
      `}</style>
    </div>
  );
}

export default Attendance;
