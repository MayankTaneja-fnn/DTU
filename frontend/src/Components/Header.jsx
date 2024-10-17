import React, { useState } from 'react';
import { Link ,NavLink} from 'react-router-dom';



function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle visibility on click
  };

  const handleMouseOver = () => {
    setIsVisible(true); // Show on hover
  };

  const handleMouseLeave = () => {
    setIsVisible(false); // Hide when mouse leaves the dropdown
  };

  const [isOpen, setIsOpen] = useState(false); // State to manage side nav visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle side nav
  };

  return (
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

        {/* Login Section */}
        <div
          className="mt-4 z-50 md:mt-0 md:ml-4 border-2 border-solid border-blue-900 text-center font-bold font-mono text-sm md:text-lg rounded-md w-24 h-10 flex items-center justify-center relative"
          onMouseLeave={handleMouseLeave}
        >
          {/* Login button */}
          <Link
            onClick={toggleVisibility}
            onMouseOver={handleMouseOver}
            className="cursor-pointer"
          >
            Login
          </Link>

          {/* Hidden Div for Student/Faculty Login */}
          <div
            id="hid-div"
            className={`absolute top-9 -left-24 text-sm w-48 bg-white text-black p-2 shadow-md rounded-md transition-all duration-300 ${
              isVisible ? 'block' : 'hidden'
            }`}
          >
            <Link to="/student/register" className="block py-1 hover:bg-gray-200">
              Student Register
            </Link>
            <Link to="/student/login" className="block py-1 hover:bg-gray-200">
              Student Login
            </Link>
            <Link to="/faculty/login" className="block py-1 hover:bg-gray-200">
              Faculty Login
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full ">
      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden flex justify-between items-center py-4  bg-[#c4ecfc]">
        {/* <h1 className="text-xl font-semibold">DTU</h1> */}
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Side Nav for Small Screens */}
      <div
        className={`fixed z-50 top-0 left-0 w-64 h-full  bg-[#c4ecfc] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-xl">
          &times;
        </button>
        <nav className="flex flex-col items-start p-6 space-y-6 `">
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/" onClick={toggleMenu} className="text-lg">Home</NavLink>
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/about" onClick={toggleMenu} className="text-lg">About Us</NavLink>
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/admin" onClick={toggleMenu} className="text-lg">Administration</NavLink>
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/academics" onClick={toggleMenu} className="text-lg">Academics</NavLink>
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/admissions" onClick={toggleMenu} className="text-lg">Admissions</NavLink>
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/alumni" onClick={toggleMenu} className="text-lg">Alumni</NavLink>
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/media" onClick={toggleMenu} className="text-lg">Media</NavLink>
          <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/life" onClick={toggleMenu} className="text-lg">Life@DTU</NavLink>
        </nav>
      </div>

      {/* Horizontal Nav for Larger Screens */}
      <nav className="hidden md:flex justify-between items-center font-semibold bg-[#c4ecfc] py-2">
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/" className="text-lg">Home</NavLink>
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/about" className="text-lg">About Us</NavLink>
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/admin" className="text-lg">Administration</NavLink>
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/academics" className="text-lg">Academics</NavLink>
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/admissions" className="text-lg">Admissions</NavLink>
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/alumni" className="text-lg">Alumni</NavLink>
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/media" className="text-lg">Media</NavLink>
        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration:isActive?"underline":"" ,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/life" className="text-lg mr-5">People </NavLink>
      </nav>
    </div>
    </div>
  );
}

export default Header;
