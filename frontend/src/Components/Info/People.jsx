import React from 'react';

const People = () => {
    return (
        <div className="min-h-screen bg-[#f0f9ff] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-blue-900 font-serif mb-4">Our People</h1>
                    <p className="text-lg text-gray-600">The faculty and staff dedicated to bridging the gap between DTU and the society.</p>
                </div>

                {/* Administration Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-2">Leadership</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-blue-600 hover:-translate-y-1 transition-transform">
                            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                                <img src="/logo/dean_new.png" alt="Dean" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Prof. Mini Sreejeth</h3>
                            <p className="text-blue-600 font-medium text-sm">Dean (Outreach Extension & Activities)</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-gray-600 hover:-translate-y-1 transition-transform">
                            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-4xl text-gray-400">
                                <span>👤</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Sh. O.P. Gaur</h3>
                            <p className="text-gray-600 font-medium text-sm">Private Secretary</p>
                        </div>

                    </div>
                </section>

                {/* Associated Faculty Section */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-2">Associated Faculty</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-50">
                                <div className="w-20 h-20 bg-blue-100 rounded-full mb-4 mx-auto flex items-center justify-center text-blue-500 text-2xl font-bold">
                                    {i === 1 ? 'VK' : `F${i}`}
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-gray-800">{i === 1 ? 'Dr. Vijay Kumar Pandey' : `Faculty Member ${i}`}</h3>
                                    <p className="text-xs text-gray-500 uppercase mt-1">
                                        {i === 1 ? 'Outreach Coordinator' : 'Department of Engineering'}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>

            </div>
        </div>
    );
};

export default People;
