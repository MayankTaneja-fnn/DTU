import React from 'react';

const Media = () => {
    return (
        <div className="min-h-screen bg-[#f0f9ff] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-extrabold text-blue-900 font-serif text-center mb-12">Media & Publications</h1>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Information Bulletin */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="bg-gray-100 h-64 flex items-center justify-center border-b border-gray-100">
                            <span className="text-6xl">📰</span>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Information Bulletin</h2>
                            <p className="text-gray-600 mb-6">
                                The Centre publishes an official Information Bulletin detailing recent activities, achievements, and upcoming events in outreach and extension.
                            </p>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Download Latest Issue
                            </button>
                        </div>
                    </div>

                    {/* Photo Gallery */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="bg-gray-100 h-64 flex items-center justify-center border-b border-gray-100">
                            <span className="text-6xl">📸</span>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Photo Gallery</h2>
                            <p className="text-gray-600 mb-6">
                                Explore visual highlights from our village visits, 'Lab on Wheels' sessions, and student workshops.
                            </p>
                            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                                View Gallery
                            </button>
                        </div>
                    </div>

                </div>

                {/* Press Releases Section (Placeholder) */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">Latest Press Releases</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-blue-50 transition-colors cursor-pointer">
                                <div>
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1 block">Press Release</span>
                                    <h4 className="text-lg font-semibold text-gray-900">DTU launches new initiative for rural digital literacy</h4>
                                </div>
                                <span className="text-gray-400 text-sm mt-2 md:mt-0">Oct {10 + i}, 2024</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Media;
