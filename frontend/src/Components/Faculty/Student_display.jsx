import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import StudentHeader from '../Student/StudentHeader.jsx';

const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function Student_Display() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const showLogs = (student) => {
    navigate("/faculty/student_logs", { state: { key: student.email } });
  };

  const showAttendance = (student) => {
    navigate("/faculty/student_attendance", { state: { key: student.email } });
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/faculty/display_students`, {
          withCredentials: true // Include cookies with the request
        });
        setStudents(response.data.data);
      } catch (err) {
        setError(err.response?.data || "An error occurred while fetching students");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);


  const filteredStudents = students.filter(student =>
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.roll_no.toString().includes(searchTerm)
  );

  return (
    <div className="font-sans bg-[#f0f9ff] min-h-screen">
      <StudentHeader userType="faculty" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 font-serif">Registered Students</h2>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by student name or roll number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-lg px-6 py-3 bg-white border border-blue-100 rounded-full shadow-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2 text-blue-600 mt-12">
              <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg font-medium">Loading students...</span>
            </div>
          ) : (
            filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg border border-blue-50 rounded-2xl p-6 w-full md:w-4/5 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
                    <div className="text-lg font-bold text-blue-900">{student.fullName || "Name Not Available"}</div>
                    <div className="text-sm text-gray-500 font-mono">Roll No: {student.roll_no || "N/A"}</div>
                  </div>

                  <div className="flex items-center gap-6 mb-4 md:mb-0 justify-center flex-1">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-blue-600">{student.attendance ? student.attendance.length : 0}</span>
                      <span className="text-xs text-gray-400 uppercase tracking-wide">Attendance</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      className="px-5 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition duration-300"
                      onClick={() => showLogs(student)}
                    >
                      View Logs
                    </button>
                    <button
                      className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow hover:from-blue-700 hover:to-blue-900 transition duration-300"
                      onClick={() => showAttendance(student)}
                    >
                      Attendance
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-lg mt-10">No students found matching your search.</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Student_Display;
