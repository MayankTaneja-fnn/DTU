import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function FacultyLogin() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const validateForm = () => {

        if (!emailRegex.test(email)) {
            setErrors("Please enter correct email")
            return false;
        }
        else if (password == '') {
            setErrors("plaease enter password");
            return false;
        }

        return true;
    }

    const handleLoginSubmit = () => {
        setErrors("");
        if (!validateForm()) {
            return;
        }
        setIsLoading(true);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/faculty/login`, {
            email: email,
            password: password
        }, {
            withCredentials: true // Important for sending/receiving cookies
        })
            .then(function (response) {
                setEmail("");
                setPassword("");
                console.log(`Faculty Login successfully:`, response);
                // let email=response.data.data.email;
                // console.log(email);
                navigate("/faculty/student_display");
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
        <div className="min-h-screen relative flex items-center justify-center bg-[#f0f9ff] font-sans overflow-hidden">
            {/* Background Image with Light Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="../../logo/delhi_technological_university_formerly_dce_cover.jpeg"
                    alt="DTU Campus"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#c4ecfc]/50 to-white/50"></div>
            </div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md px-6 py-12 bg-white rounded-3xl shadow-xl border border-blue-100 sm:px-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-900 font-serif tracking-wide mb-2">Faculty Login</h2>
                    {/* <p className="text-gray-500">Access the Faculty Portal</p> */}
                </div>

                {errors && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-sm">
                        {errors}
                    </div>
                )}

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-serif tracking-wide">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            autoFocus
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-serif tracking-wide">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        onClick={handleLoginSubmit}
                        disabled={isLoading}
                        className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Logging in...
                            </span>
                        ) : 'Sign In'}
                    </button>

                    {/* Added a spacer to balance the layout since Faculty might not have a register link */}
                    <div className="mt-4"></div>
                </div>
            </div>
        </div>
    )
}

export default FacultyLogin
