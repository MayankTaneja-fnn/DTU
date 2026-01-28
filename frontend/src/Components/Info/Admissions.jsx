import React from 'react';

const Admissions = () => {
    return (
        <div className="min-h-screen bg-[#f0f9ff] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Hero Section */}
                <div className="relative bg-blue-900 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[url('/logo/delhi_technological_university_formerly_dce_cover.jpeg')] bg-cover bg-center"></div>
                    <div className="relative z-10 p-12 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">Admissions & Programs</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            While the Centre does not handle degree admissions, we offer specialized certificate courses and community programs.
                        </p>
                    </div>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Tech Courses */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-2xl transition-all">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 text-blue-600">💻</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Literacy</h3>
                        <p className="text-gray-600 mb-4 text-sm">Certificate courses designed to bridge the digital divide.</p>
                        <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Basic Computer Course (BCC)</li>
                            <li>• Basic Python Programming (BPP)</li>
                            <li>• Lab on Wheels Initiative</li>
                        </ul>
                    </div>

                    {/* Wellness */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600 hover:shadow-2xl transition-all">
                        <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 text-green-600">🧘</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Wellness</h3>
                        <p className="text-gray-600 mb-4 text-sm">Promoting mindfulness and physical health in the community.</p>
                        <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Certificate Course in Yoga</li>
                            <li>• Wellness Workshops</li>
                            <li>• Community Health Camps</li>
                        </ul>
                    </div>

                    {/* Schools Outreach */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl transition-all">
                        <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 text-orange-600">🎓</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Exploring Engineering</h3>
                        <p className="text-gray-600 mb-4 text-sm">Annual program for Class X, XI, and XII students.</p>
                        <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Free participation</li>
                            <li>• Campus & Lab Tours</li>
                            <li>• Interaction with Faculty</li>
                        </ul>
                    </div>

                </div>

                {/* CTA */}
                <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Interested in Mainstream DTU Admissions?</h2>
                    <p className="text-gray-700 mb-6">
                        For B.Tech, M.Tech, MBA, and PhD admissions, please visit the main university portal.
                    </p>
                    <a href="http://www.dtu.ac.in/" target="_blank" rel="noreferrer" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                        Visit Official DTU Website
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Admissions;
