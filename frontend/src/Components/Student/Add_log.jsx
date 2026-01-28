import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import StudentHeader from './StudentHeader.jsx';

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

  return (
    <div className="font-sans bg-[#f0f9ff] min-h-screen">
      <StudentHeader userType="student" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <button onClick={() => { navigate("/student/logs") }} className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FaArrowAltCircleLeft className='w-8 h-8 mr-2 group-hover:-translate-x-1 transition-transform' />
            <span className="text-lg font-medium">Back to Logs</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-50">
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-blue-900 font-serif'>Add New Log</h2>
            <p className="text-gray-500 mt-2">Document your activities and achievements</p>
          </div>

          {errors && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-center font-medium">
              {errors}
            </div>
          )}

          <div className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 ml-1">Title</label>
              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                value={title}
                onChange={handleTitleChange}
                autoFocus
                required
                placeholder="e.g., Community Health Workshop"
              />
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 ml-1">Description</label>
              <textarea
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                rows={8}
                value={description}
                onChange={handleDescriptionChange}
                required
                placeholder="Describe the details of the event or activity..."
              ></textarea>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 ml-1">Upload Photos</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-300 border-dashed rounded-xl cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                  </div>
                  <input type="file" className="hidden" onChange={handlePhotos} multiple />
                </label>
              </div>
              {photos.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {photos.map((photo, idx) => (
                    <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {photo.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                className="w-full md:w-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all hover:scale-[1.02]"
                onClick={handleAddLog}
              >
                Submit Log
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_log
