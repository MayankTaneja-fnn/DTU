import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-[#f0f9ff] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-50">

                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-10 text-center">
                    <h1 className="text-4xl font-extrabold text-white font-serif tracking-wide mb-2">
                        About Us
                    </h1>
                    <p className="text-blue-100 text-lg font-medium">Centre of Extension and Field Outreach</p>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 space-y-8">

                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-100 pb-2">Overview</h2>
                        <div className="text-gray-700 leading-relaxed text-lg text-justify">
                            <p className="mb-4">
                                The <span className="font-semibold text-blue-800">Centre for Extension and Field Outreach</span> was established by Delhi Technological University (DTU) in 2018, adhering to the University Grants Commission (UGC) policies and with the approval of the DTU Board of Management.
                            </p>
                            <p>
                                Our core mission is to bridge the gap between the university and the wider community. We strive to foster an interdependent relationship where technological knowledge and innovation are leveraged to drive social development and community empowerment.
                            </p>
                        </div>
                    </section>

                    {/* Vision & Mission */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">Our Vision</h3>
                            <p className="text-gray-700 italic">
                                "To use technological innovations for improving outreach access and effectiveness of educational promotion and strength for the society."
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                            <h3 className="text-xl font-bold text-green-900 mb-3">Our Mission</h3>
                            <p className="text-gray-700 italic">
                                "To make people aware of the benefits of education, develop skills and entrepreneurial enthusiasm, and provide quality training to skill workers."
                            </p>
                        </div>
                    </div>

                    {/* Key Initiatives */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-100 pb-2">Key Initiatives</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mt-1 mr-3">✓</span>
                                <span className="text-gray-700 text-lg">Adoption of 9 villages for holistic development (5 under Unnat Bharat Abhiyan).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mt-1 mr-3">✓</span>
                                <span className="text-gray-700 text-lg">"Lab on Wheels" delivering Basic Computer & Python courses to remote areas.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mt-1 mr-3">✓</span>
                                <span className="text-gray-700 text-lg">"Wisdom on Wheel" initiative in association with Paytm Foundation.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mt-1 mr-3">✓</span>
                                <span className="text-gray-700 text-lg">Certificate courses in Yoga and Wellness for community health.</span>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default About;
