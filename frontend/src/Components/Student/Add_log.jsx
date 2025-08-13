import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function Add_log() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handlePhotos = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 0) {
      setPhotos(prev => [...prev, ...files]);
    }
  };

  useEffect(() => {
    console.log("Photos have been updated:", photos);
  }, [photos]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const validateData = () => {
    if (title.trim() === '') {
      setErrors("Title is required");
      return false;
    } else if (description.trim() === '') {
      setErrors("Description is required");
      return false;
    }
    return true;
  }

  const handleAddLog = () => {
    if (!validateData()) {
      return;
    }

    setErrors("");

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    photos.forEach((photo) => {
      formData.append('photos', photo);
    });

  
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/logs/add_log`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then(function (response) {
        console.log("Log added successfully");
        navigate("/student/logs");
      })
      .catch(function (error) {
        console.log(error);
        setErrors(error.message || "Error while adding the log");
      });
  };

  const handleLogOut=()=>{
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/logOut`,{},{
      withCredentials: true
    })
      .then(function (response) {
        console.log("logout successful", response);
        navigate("/student/login");
      })
      .catch(function (errors) {
        console.log(errors);
        setErrors(errors);
      })
  }

  return (
    <div>
      {/* Header Section */}
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

      <div>
        <FaArrowAltCircleLeft className='text-blue-800 w-6 h-6 cursor-pointer' onClick={()=>{navigate("/student/logs")}}></FaArrowAltCircleLeft>
      </div>

      {/* Add Log Form */}
      <div className='pt-24 text-center text-3xl font-bold text-gray-800'>
        Add New Log
      </div>

      <div className='mt-10  px-10 md:px-40'>
        {errors && <p className='text-red-600 text-center mb-4'>{errors}</p>}

        {/* Title Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Enter Title</label>
          <input 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
            value={title} onChange={handleTitleChange} autoFocus required
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Enter Description</label>
          <textarea 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
            rows={10} value={description} onChange={handleDescriptionChange} required
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Upload Images</label>
          <input 
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            type='file' onChange={handlePhotos} multiple
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            onClick={handleAddLog}
          >
            Add Log
          </button>
        </div>
      </div>
    </div>
  )
}


export default Add_log

