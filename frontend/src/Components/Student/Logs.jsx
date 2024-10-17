import React from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from 'react';

const logs=[];

function Logs() {

  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);

  let navigate=useNavigate();

  useEffect(() => {
    const fetchLogs = async () => {
        try {
            const response = await axios.post("http://localhost:3000/logs/getLogs",{}, {
                withCredentials: true // Include cookies with the request
            });
            setLogs(response.data.data);
            // console.log(logs);
        } catch (err) {
            setError(err.response?.data || "An error occurred while fetching logs");
            console.error(err);
        }
    };

    fetchLogs();
}, []);

useEffect(() => {
  console.log("Updated logs:", logs);
}, [logs]);

  const handleLogOut=()=>{
    axios.post("http://localhost:3000/student/logOut",{},{
      withCredentials:true
    })
    .then(function(response){
      console.log("logout successful",response);
      navigate("/student/login");
    })
    .catch(function(errors){
      console.log(errors);
    })
  }

  const displayLog=(log)=>{
    // console.log(log);
    navigate(`/display_log`,{state:{key:log._id}});
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
        <div className='flex pt-32 w-screen justify-end'>
      {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* <div className='w-[60%]'>
                <input className='w-full h-auto border-2 border-black border-solid'/>
            </div> */}
            <div className=' border-2 border-blue-900 border-solid w-auto rounded-xl h-auto text-xl font-mono text-center'>
              <button onClick={()=>{navigate("/student/add_log")}}>
                Add new log
              </button> 
            </div>
        </div>
        <div className='w-full h-auto pt-10 flex' >
          {logs.map((log,index)=>(
            <div onClick={()=>displayLog(log)} className='w-96 ml-5 cursor-pointer border-2 border-black border-solid rounded-md h-96 text-center'>
            <div className='w-full flex justify-center'>
                <img src={log.photos[0]}/>
            </div>
            <div id='title'>
                {log.title}
            </div>
            <div id='date'>
                {log.createdAt.slice(0,10)}
            </div>
        </div>
           ))} 
            
            {/* <div className='w-96 ml-5 border-2 border-black border-solid rounded-md h-96 text-center'>
                <div className='w-full flex justify-center'>
                    <img src='../../logo/dtu_logo.jpg'/>
                </div>
                <div id='title'>
                    Educating Children
                </div>
                <div id='date'>
                    24/09/2024
                </div>
            </div> */}
        </div>
        
    </div>
  )
}

export default Logs