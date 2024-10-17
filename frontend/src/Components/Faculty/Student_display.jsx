import React, { useState,useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Student_Display() {
  const navigate=useNavigate();

  const [students,setStudents]=useState([]);
  const [error,setError]=useState("");

  const showLogs=async(student)=>{
  navigate("/faculty/student_logs",{state:{key:student.email}});
  }

  const showAttendance=async(student)=>{
    navigate("/faculty/student_attendance",{state:{key:student.email}});
    }

  useEffect(() => {
    const fetchstudents = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/faculty/display_students`, {
                withCredentials: true // Include cookies with the request
            });
            setStudents(response.data.data);
            console.log(response.data);
            //  console.log(log);
        } catch (err) {
            setError(err.response?.data || "An error occurred while fetching logs");
            console.error(err);
        }
    };

    fetchstudents();
}, []);

useEffect(() => {
    console.log("Updated students:", students);
  }, [students]);

  const handleLogOut=()=>{
    axios.post("http://localhost:3000/faculty/logOut",{},{
      withCredentials: true
    })
    .then(function(response){
      console.log("logout successful",response);
      navigate("/login");
    })
    .catch(function(errors){
      console.log(errors);
    })
  }

  return (
    <div>
        <div className='fixed z-50 w-screen'>
      <div className="images flex flex-col md:flex-row bg-[#c4ecfc] w-full h-auto md:h-24 items-center p-4 md:py-0 relative">
        {/* DTU Logo */}
        <img
          src="../../logo/DTU_official_logo.png"
          alt="DTU Logo"
          className="h-20 w-32 md:h-20 md:w-28 mb-4 md:mb-0 px-2"
        />

        {/* Department Information */}
        <div className="text-center md:text-left md:ml-4 -mt-2 md:-mt-3">
          <h1 className="text-lg md:text-2xl font-bold font-sans">
            Centre of Extension and Field Outreach
          </h1>
          <h2 className="text-sm md:text-lg">Delhi Technological University</h2>
        </div>

        {/* G20 Image */}
        <img
          src="../../logo/G20Whiteback_processed.jpg"
          alt="G20 Image"
          className="h-16 w-28 md:h-20 md:w-32 mt-4 md:mt-0 md:ml-auto px-2"
        />
          
          <div className="mt-4 z-50 md:mt-0 md:ml-4 border-2 border-solid 
          border-blue-900 text-center font-mono text-sm md:text-lg 
          rounded-md w-24 h-10 flex items-center justify-center relative cursor-pointer" onClick={handleLogOut}>LogOut</div>
        </div>
        </div>
        <div className='pt-32 w-screen text-center text-2xl font-bold'>Students List</div>
        <div className='mt-10 w-screen'>
          {students.map((student,index)=>(
            <div className='flex ml-[10%] w-[80%] mt-5 bg-blue-400 border-2 border-black border-solid rounded-xl justify-between'>
                <div id='roll_no'>{student.roll_no}</div>
                <div id='name'>{student.fullName}</div>
                <div id='total_logs'>2</div>
                <button id='see_logs' className='border-2 w-20 border-black border-solid ml-40' onClick={()=>showLogs(student)}>Logs</button>
                <button id='attendance' className='border-2 w-32 border-black border-solid mr-10' onClick={()=>showAttendance(student)}> Attendance</button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Student_Display;