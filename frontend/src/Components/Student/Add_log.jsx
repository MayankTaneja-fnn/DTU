import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Add_log() {

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [photos,setPhotos]=useState([]);
  const [errors,setErrors]=useState("");

  const navigate=useNavigate();

  const handlePhotos = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];  // Convert FileList to array
    if (files.length > 0) {
      setPhotos(prev => [...prev, ...files]);  // Append the new files to the existing array
    }
  };
  

  useEffect(() => {
    console.log("Photos have been updated:", photos);
  }, [photos]);
  

  const handleTitleChange=(e)=>{
    setTitle(e.target.value);
  }

  const handleDescriptionChange=(e)=>{
    setDescription(e.target.value);
  }

  const validateData=()=>{
    if(title.trim()==''){
      setErrors("Title is required");
      return false;
    }
    else if(description.trim()==''){
      setErrors("Description is required");
      return false;
    }
    return true;

  }

  const handleAddLog = () => {
    console.log(title);
    console.log(description);
    
    if (!validateData()) {
      return;
    }
    
    setErrors("");
  
    // Creating a FormData object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    
    // Append each photo to FormData
    photos.forEach((photo, index) => {
      formData.append('photos', photo); // 'photos' should match your backend field name
    });
  
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/logs/add_log`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data", // Set the appropriate content type
      }
    })
    .then(function(response){
      console.log("Log added successfully");
      navigate("/student/logs");
    })
    .catch(function(error){
      console.log(error);
      setErrors(error.message || "Error while adding the log");
    });
  };
  

  const handleLogOut=()=>{
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/logOut`,{},{
      withCredentials: true
    })
    .then(function(response){
      console.log("logout successful",response);
      navigate("/student/login");
    })
    .catch(function(errors){
      console.log(errors);
      setErrors(errors);
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
        <div className='pt-32 w-screen text-center text-2xl font-bold'>
            Add New Log
        </div>
        <div className='mt-10 w-screen ml-10'>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
            <div>
                <div>Enter Title</div>
                <input className='border-2 border-black border-solid' value={title} onChange={handleTitleChange} autoFocus required/>
            </div>
            <div>
                <div>Enter description</div>
                <textarea className='border-black border-2 border-solid' rows={10} cols={80} value={description} onChange={handleDescriptionChange} required></textarea>
            </div>
            <div>
                <div>Upload Images</div>
                <input type='file' onChange={handlePhotos}  multiple/>
            </div>
            <div>
              <button onClick={handleAddLog}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Add_log
