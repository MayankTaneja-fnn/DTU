import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function StudentRegister() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setfullName] = useState("");
    const [roll_no, setRoll_no] = useState("");
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate = useNavigate();


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e) => {
        setfullName(e.target.value);
    }

    const handleRoll_noChange = (e) => {
        setRoll_no(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const validateForm = () => {
        if (fullName.trim() === '') {
            setErrors("Name field is empty")
            return false;
        }
        else if (!emailRegex.test(email)) {
            setErrors("Please enter correct email")
            return false;
        }
        else if (roll_no.length != 9 || roll_no.trim() == '') {
            setErrors("Enter valid roll number");
            return false;
        }
        else if (password.trim() == '') {
            setErrors("Enter valid password");
            return false;
        }
        return true;
    }

    const handleRegisterClick = () => {
        console.log(fullName, email, password, roll_no);
        setErrors("");
        if (!validateForm()) {
            return;
        }
        setIsLoading(true);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/student_register`, {
            fullName: fullName,
            email: email,
            roll_no: roll_no,
            password: password
        }, {
            withCredentials: true // Important for sending/receiving cookies
        })
            .then(function (response) {
                setfullName("");
                setEmail("");
                setPassword("");
                setRoll_no("");
                console.log(`Student Register successfully:`, response);
                navigate("/student/login");
            })
            .catch(function (error) {
                setErrors(error.message || "unexpected error occured")
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#f0f9ff] font-sans overflow-hidden py-10">
            {/* Background Image with Light Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="../../logo/delhi_technological_university_formerly_dce_cover.jpeg"
                    alt="DTU Campus"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#c4ecfc]/50 to-white/50"></div>
            </div>

            {/* Register Card */}
            <div className="relative z-10 w-full max-w-lg px-6 py-10 bg-white rounded-3xl shadow-xl border border-blue-100 sm:px-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-blue-900 font-serif tracking-wide mb-2">Student Registration</h2>
                    {/* <p className="text-gray-500">Join the DTU Digital Community</p> */}
                </div>

                {errors && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-sm">
                        {errors}
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 font-serif tracking-wide">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={handleNameChange}
                            required
                            autoFocus
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 font-serif tracking-wide">Roll Number</label>
                        <input
                            type="text"
                            value={roll_no}
                            onChange={handleRoll_noChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your roll number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 font-serif tracking-wide">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 font-serif tracking-wide">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Create a password"
                        />
                    </div>

                    <button
                        onClick={handleRegisterClick}
                        disabled={isLoading}
                        className="w-full py-4 mt-4 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Registering...
                            </span>
                        ) : 'Create Account'}
                    </button>

                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            Already have an account?{' '}
                            <a href="/student/login" className="text-blue-700 hover:text-blue-900 font-semibold transition-colors hover:underline decoration-blue-500 underline-offset-4">
                                Login here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentRegister
