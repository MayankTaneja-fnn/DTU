import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function FacultyLogin() {
    
    let navigate=useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errors,setErrors]=useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);   
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);   
    }

    const validateForm=()=>{
        
        if(!emailRegex.test(email)){
            setErrors("Please enter correct email")
            return false;
          }
          else if(password==''){
            setErrors("plaease enter password");
            return false;
          }
          
          return true;
    }

    const handleLoginSubmit=()=>{
        setErrors("");
        if(!validateForm()){
            return;
        }
        axios.post(`${import.meta.env.BACKEND_URL}/faculty/login`,{
            email:email,
            password:password
        },{
            withCredentials: true // Important for sending/receiving cookies
        })
        .then(function(response){
            setEmail("");
            setPassword("");
            console.log(`Faculty Login successfully:`,response);
            // let email=response.data.data.email;
            // console.log(email);
           navigate("/faculty/student_display");
        })
        .catch(function(error){
            setErrors(error.message || "unexpected error occured")
            console.log(error);
        })
    }

  return (
    <div className=''>
         {errors && <div className='text-red-500 mt-2'>{errors}</div>}
        <div className='w-[100%] flex justify-center items-center h-screen relative'>
            <img src='../../logo/delhi_technological_university_formerly_dce_cover.jpeg' className='opacity-95 w-screen h-screen'/>
            <div className='w-[32%] rounded-md h-[70%] absolute bg-slate-100 bg-opacity-75 sm:w-[70%] md:w-[50%] lg:w-[32%]  lg:h-[70%]'>
                <div className='text-xl lg:text-2xl font-bold font-sans flex w-full justify-center mt-4 text-slate-800'>
                    Faculty Login
                </div>
                <div className='ml-3'>
                    <div className=' font-serif mt-8 text-xl opacity-85'>Email ID</div>
                    <input className='w-[93%] h-7 mt-2 rounded-md' type='email' value={email} onChange={handleEmailChange} required autoFocus/>
                </div>
                <div className='ml-3'>
                    <div className=' font-serif mt-5 text-xl opacity-85'>Password</div>
                    <input type='password' className='w-[93%] h-7 mt-2 rounded-md' value={password} onChange={handlePasswordChange} required/>
                </div>
                <div className='mt-6 text-xl font-mono flex justify-center h-9  w-full text-center'>
                    <button className=' mt-1 w-24 bg-blue-600 text-white border-dashed rounded-lg' onClick={handleLoginSubmit}>Login</button>
                </div>
                {/* <div className='mt-6 ml-3'>If not register,<a href='/student_register'>click here</a></div> */}
            </div>
        </div>
    </div>
  )
}

export default FacultyLogin
