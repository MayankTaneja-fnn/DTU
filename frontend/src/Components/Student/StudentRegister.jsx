import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";


function StudentRegister() {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [fullName,setfullName]=useState("");
    const [roll_no,setRoll_no]=useState("");
    const [errors,setErrors]=useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate=useNavigate();


    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handleNameChange=(e)=>{
        setfullName(e.target.value);
    }

    const handleRoll_noChange=(e)=>{
        setRoll_no(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const validateForm=()=>{
        if(fullName.trim()===''){
            setErrors("Name field is empty")
            return false;
          }
          else if(!emailRegex.test(email)){
            setErrors("Please enter correct email")
            return false;
          }
          else if(roll_no.length!=9||roll_no.trim()==''){
            setErrors("Enter valid roll number");
            return false;
          }
          else if(password.trim()==''){
            setErrors("Enter valid password");
            return false;
          }
          return true;
    }

    const handleRegisterClick=()=>{
        console.log(fullName,email,password,roll_no);
        setErrors("");
        if(!validateForm()){
            return;
        }
        axios.post("http://localhost:3000/student/student_register",{
            fullName:fullName,
            email:email,
            roll_no:roll_no,
            password:password
        },{
            withCredentials: true // Important for sending/receiving cookies
        })
        .then(function(response){
            setfullName("");
            setEmail("");
            setPassword("");
            setRoll_no("");
            console.log(`Student Register successfully:`,response);
            navigate("/student/login");
        })
        .catch(function(error){
            setErrors(error.message || "unexpected error occured")
            console.log(error);
        })
    
    }

  return (
    <div className='pt-80 md:pt-[8.7rem]'>
        {errors && <div className='text-red-500 mt-2'>{errors}</div>}

        <div className='w-[100%] flex justify-center items-center h-auto relative'>
            <img src='../../logo/delhi_technological_university_formerly_dce_cover.jpeg' className='opacity-60 w-screen h-screen'/>
            <div className='w-[32%] rounded-md h-auto absolute bg-slate-100 bg-opacity-75 md:w-[32%] sm:w-[90%] sm:p-4 '>
                <div className='text-2xl font-bold font-sans ml-2 md:ml-28 mt-4 text-slate-800'>
                    Student Register
                </div>
                <div className='ml-3'>
                    <div className=' font-serif mt-8 text-xl opacity-85'>Student Name</div>
                    <input className='w-[93%] h-7 mt-2 rounded-md' type='text' value={fullName} onChange={handleNameChange} required autoFocus/>
                </div>
                <div className='ml-3'>
                    <div className=' font-serif mt-8 text-xl opacity-85'>Roll No.</div>
                    <input className='w-[93%] h-7 mt-2 rounded-md' value={roll_no} onChange={handleRoll_noChange} required />
                </div>
                <div className='ml-3'>
                    <div className=' font-serif mt-8 text-xl opacity-85'>Email ID</div>
                    <input className='w-[93%] h-7 mt-2 rounded-md' value={email} type='email' onChange={handleEmailChange} required/>
                </div>
                <div className='ml-3'>
                    <div className=' font-serif mt-5 text-xl opacity-85'>Password</div>
                    <input type='password' className='w-[93%] h-7 mt-2 rounded-md' value={password} onChange={handlePasswordChange} required/>
                </div>
                <div className='mt-6 text-xl font-mono ml-2 md:ml-32 h-10 bg-blue-600 text-white border-dashed rounded-lg w-28 text-center'>
                    <button className=' mt-1' onClick={handleRegisterClick}>Register</button>
                </div>
                <div className='mt-6 ml-3'>If already registered,<a href='/student/login'>click here</a></div>
            </div>
        </div>
    </div>
  )
}

export default StudentRegister