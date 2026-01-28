import React from 'react';

const Administration = () => {
    return (
        <div className="min-h-screen bg-[#f0f9ff] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-blue-900 font-serif tracking-wide mb-4">Administration</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the dedicated leadership team driving the vision of the Centre of Extension and Field Outreach at DTU.
                    </p>
                </div>

                {/* Leadership Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Dean Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-50 transform hover:-translate-y-2 transition-all duration-300">
                        <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-32 relative">
                            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                                <div className="h-32 w-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                                    <img src="/logo/dean_new.png" alt="Dean" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="pt-20 pb-8 px-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">Prof. Mini Sreejeth</h2>
                            <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">Dean (Outreach Extension & Activities)</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Leading the centre with a vision to integrate academic excellence with social responsibility. Spearheading initiatives like 'Lab on Wheels' and village adoption programs.
                            </p>
                        </div>
                    </div>

                    {/* Private Secretary Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-50 transform hover:-translate-y-2 transition-all duration-300">
                        <div className="bg-gradient-to-r from-gray-700 to-gray-600 h-32 relative">
                            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                                <div className="h-32 w-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center text-4xl text-gray-400">
                                    <span>👤</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-20 pb-8 px-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">Sh. O.P. Gaur</h2>
                            <p className="text-gray-500 font-medium mb-4 uppercase tracking-wide text-sm">Private Secretary</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Ensuring smooth administrative operations and coordination for the Centre's various outreach activities.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Past Administration */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-12 border-l-4 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Past Leadership</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span className="font-semibold mr-2">Prof. Amit Shrivastava</span> - Former Dean (Outreach Extension & Activities)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span className="font-semibold mr-2">Prof. Pravin Kumar</span> - Former Associate Dean (Outreach Extension & Activities)
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Administration;
