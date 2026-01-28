import React from 'react';

const Alumni = () => {
    return (
        <div className="min-h-screen bg-[#f0f9ff] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">

                <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-50">
                    <div className="md:w-1/2 h-64 md:h-96 relative">
                        <img src="/logo/delhi_technological_university_formerly_dce_cover.jpeg" alt="Alumni Network" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-blue-900/40"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h1 className="text-4xl font-serif font-bold mb-2">Alumni Network</h1>
                            <p className="text-blue-100">Connecting 40,000+ graduates worldwide.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Delhi Technological University boasts a world-class alumni network of over <span className="font-bold text-blue-900">40,000 members</span>. Our alumni are leaders in technology, business, research, and public service across the globe.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-3xl mr-4">🌍</span>
                                <div>
                                    <h3 className="font-bold text-gray-800">Global Presence</h3>
                                    <p className="text-sm text-gray-500">From Silicon Valley to Civil Services, our alumni make an impact everywhere.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-3xl mr-4">🤝</span>
                                <div>
                                    <h3 className="font-bold text-gray-800">Giving Back</h3>
                                    <p className="text-sm text-gray-500">Mentorship programs, scholarships, and industry connections for current students.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Engage with Us</h2>
                        <p className="text-gray-600 mb-6">
                            Join the network to stay updated, participate in events, and contribute to the university's growth.
                        </p>
                        <button className="text-blue-600 font-bold hover:underline flex items-center">
                            Register as Alumni <span className="ml-2">→</span>
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gray-600">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Alumni Office</h2>
                        <p className="text-gray-600 mb-2">Managed by the Stakeholder Management Office.</p>
                        <p className="text-gray-700 font-mono">alumni@dtu.ac.in</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Alumni;
