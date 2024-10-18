import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function Student_Display() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const showLogs = (student) => {
    navigate("/faculty/student_logs", { state: { key: student.email } });
  };

  const showAttendance = (student) => {
    navigate("/faculty/student_attendance", { state: { key: student.email } });
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/faculty/display_students`, {
          withCredentials: true // Include cookies with the request
        });
        setStudents(response.data.data);
      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching students");
        console.error(err);
      }
    };

    fetchStudents();
  }, []);

  const handleLogOut = () => {
    axios.post("http://localhost:3000/faculty/logOut", {}, {
      withCredentials: true
    })
      .then(function (response) {
        console.log("logout successful", response);
        navigate("/faculty/login");
      })
      .catch(function (errors) {
        console.log(errors);
      });
  };

  // Filter students based on the search term
  const filteredStudents = students.filter(student =>
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.roll_no.toString().includes(searchTerm)
  );

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
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

      <h2 className="text-2xl font-bold text-center mt-8">Students List</h2>

      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search by name or roll number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      
      <div className="flex flex-col items-center mt-4">
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white shadow-lg border border-gray-300 rounded-lg p-4 w-4/5 mt-2 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="text-gray-700">{student.roll_no ? student.roll_no : "No data available"}</div>
            <div className="text-gray-700">{student.fullName ? student.fullName : "No data available"}</div>
            <div className="text-gray-700">{student.attendance ? student.attendance.length : "No data available"}</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300" onClick={() => showLogs(student)}>Logs</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300" onClick={() => showAttendance(student)}>Attendance</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Student_Display;
