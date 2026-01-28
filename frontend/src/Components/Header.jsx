import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Nav = styled.section`
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Head = styled.section`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const navItems = [
  { name: 'Home', href: '' },
  { name: 'About Us', href: '/about' },
  { name: 'Administration', href: '/admin' },
  { name: 'Admissions', href: '/admission' },
  { name: 'Alumni', href: '/alumni' },
  { name: 'Media', href: '/media' },
  { name: 'People', href: '/people' },
];

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Side nav visibility
  const [showNav, setShowNav] = useState(false); // For sticky navbar on scroll

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const toggleMenu = () => setIsOpen((prev) => !prev); // Toggle side nav

  // Listen to scroll to show/hide fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Main Header */}
      <div className="flex md:flex-row bg-gradient-to-r from-[#d5f5fa] via-[#B2E9FD] to-[#8CD3FD] w-full h-auto md:h-32 items-center p-4 md:py-0 relative">
        {/* DTU Logo */}
        <img
          src="/logo/DTU_official_logo.png"
          alt="DTU Logo"
          className="h-20 w-32 md:h-24 md:w-28 mb-4 md:mb-0 px-1 opacity-85"
        />

        {/* Department Information */}
        <div className="text-center md:text-left md:ml-4 w-[70%] -mt-2 md:-mt-3">
          <h1 className="text-lg md:text-3xl font-bold font-[Baskerville] text-red-600">
            <Head>Centre of Extension and Field Outreach</Head>
          </h1>
          <h2 className="text-sm md:text-lg font-[Georgia] text-red-900 ml-1 mt-1">
            Delhi Technological University
          </h2>
        </div>

        {/* G20 Image */}
        <img
          src="/logo/G20Whiteback_processed-removebg-preview__2_-removebg-preview.png"
          alt="G20 Image"
          className="h-16 w-28 md:h-20 md:w-36 mt-1 md:mt-0 md:-ml-20 px-2"
        />

        {/* Login Section */}
        <div
          className="mt-4 z-50 md:-mt-2 md:ml-16 text-red-600 border-2 border-red-600 border-double text-center font-bold font-[Baskerville] text-sm md:text-lg rounded-md w-24 h-10 flex items-center justify-center relative cursor-pointer"
          onMouseLeave={() => setIsVisible(false)}
        >
          <Link onClick={toggleVisibility} onMouseOver={() => setIsVisible(true)}>
            Login
          </Link>

          {/* Login Dropdown */}
          <div
            className={`absolute top-9 left-1/2 transform -ml-6 -translate-x-1/2 text-sm w-48 bg-white text-black p-2 shadow-md rounded-md transition-all duration-300 ${isVisible ? 'block' : 'hidden'
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

      {/* Hamburger Menu for Small Screens */}
      <div className="w-full">
        <div className="md:hidden flex justify-between items-center py-4 bg-[#c4ecfc]">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Side Nav for Small Screens */}
        <div
          className={`fixed z-50 top-0 left-0 w-64 h-full bg-[#c4ecfc] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 md:hidden`}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-xl">
            &times;
          </button>
          <nav className="flex flex-col items-start p-6 space-y-6">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                onClick={toggleMenu}
                className="text-lg"
                activeClassName="font-bold text-red-600"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Horizontal Nav for Larger Screens */}
        <nav
          className={`${showNav ? 'fixed top-0 bg-[#c4ecfc] shadow-md' : ''
            } w-full hidden md:flex justify-between items-center pl-7 pr-5 font-semibold z-50 bg-gradient-to-r from-[#d5f5fa] via-[#B2E9FD] to-[#8CD3FD]`}
        >
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                `text-xl font-[Baskerville] ${isActive ? 'font-bold text-red-600 underline' : showNav ? 'text-black' : 'text-slate-700'} transition-all duration-300`
              }
            >
              <Nav>{item.name}</Nav>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
