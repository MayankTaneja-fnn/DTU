
// const images = [
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg"
// ];



import React, { useState, useEffect } from 'react';
import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const programmes = [
  "/Programmes/img1.jpg",
  "/Programmes/img2.jpg",
  "/Programmes/img3.jpg",
  "/Programmes/img4.jpg",
  "/Programmes/img5.jpg",
  "/Programmes/img6.jpg",
];

const images = [
  "/logo/delhi_technological_university_formerly_dce_cover.jpeg",
  "/logo/delhi_technological_university_formerly_dce_cover.jpeg",
  "/logo/delhi_technological_university_formerly_dce_cover.jpeg",
  "/logo/delhi_technological_university_formerly_dce_cover.jpeg",
  "/logo/delhi_technological_university_formerly_dce_cover.jpeg"
];

function Home() {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setShowNav(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${showNav ? 'transform translate-y-[1.35rem]' : ''} font-sans bg-gray-50 text-gray-800`}>

      {/* Hero / Carousel Section */}
      <div className="relative shadow-2xl">
        <Swiper
          speed={1000}
          loop={true}
          modules={[Autoplay, A11y, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-[300px] md:h-[500px] lg:h-[600px] w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <img
                  src={img}
                  alt={`DTU Campus View ${index + 1}`}
                  className='w-full h-full object-cover select-none'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* About DTU */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-900 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold font-serif text-blue-900 mb-6 border-b border-gray-100 pb-2">About DTU</h2>
            <div className="text-gray-600 leading-relaxed text-justify space-y-4">
              <p>
                Delhi Technological University (formerly Delhi College of Engineering) has an illustrious history spanning over 84 years. This prestigious institution is well known throughout the world for its premier education and student centric research & innovations. Delhi Technological University offers various inter-disciplinary and industry-relevant programs in science, engineering, management & allied areas at both the undergraduate and postgraduate levels. This stands as a testament to the ability of the university in educating future leaders.
              </p>
              <p>
                With its great history, Delhi Technological University has carved a niche for itself in the arena of engineering and technological universities around the world. However, every institution has certain responsibilities towards society. In lieu with that, BoM DTU approved the establishment of Centre for Extension and Field Outreach from FY 2018-19 to create a successful rapport between the university and the community.
              </p>
            </div>
          </div>

          {/* About CEF Outreach */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-700 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold font-serif text-green-800 mb-6 border-b border-gray-100 pb-2">Centre of Extension and Field Outreach</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-green-600 text-2xl">❖</span> Vision
              </h3>
              <p className="text-gray-600 italic border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg">
                To use technological innovations for improving outreach access and effectiveness of educational promotion and strength for the society, to utilize human resource potential and march ahead for skill development while conducting outreach activities through the Centre.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-green-600 text-2xl">❖</span> Mission
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-green-600 text-lg mt-0.5">➢</span>
                  <span>To make people aware of the benefits of general and technical education in particular. Also to encourage them enroll themselves and their family members in the desired field.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 text-lg mt-0.5">➢</span>
                  <span>To develop skill and entrepreneurship enthusiasm among learners for strengthening the human resource potential in engineering and social activities.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 text-lg mt-0.5">➢</span>
                  <span>To use technological innovations for improving outreach access and effectiveness of educational promotion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 text-lg mt-0.5">➢</span>
                  <span>To provide quality, relevant and equitable training to skill workers and develop an inter-sectorial interface.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notices Section */}
        <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 shadow-md">
            <h2 className="text-2xl font-bold text-white text-center font-sans tracking-widest uppercase">Notices & Updates</h2>
          </div>
          <div className="p-6 h-64 overflow-y-auto custom-scrollbar bg-gray-50">
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:bg-blue-50 transition-all cursor-pointer flex justify-between items-center group">
                  <div>
                    <span className="font-semibold text-blue-900 block mb-1 group-hover:text-blue-700">Latest Updates {i}</span>
                    <span className="text-sm text-gray-600">Important details regarding upcoming community outreach programs...</span>
                  </div>
                  {/* <span className="text-blue-400 text-xl group-hover:translate-x-1 transition-transform">➜</span> */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Messages Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* VC Message */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-1">
            <div className="bg-blue-900 p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <h2 className="text-2xl font-bold text-white font-serif relative z-10 tracking-wide">Message from Hon'ble VC</h2>
            </div>
            <div className="p-8 flex-1">
              <div className="flex flex-col md:flex-row gap-6 mb-4 items-start">
                <div className="shrink-0 mx-auto md:mx-0">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
                    <img className='w-full h-full object-cover' src='/logo/vc.jpg' alt="Vice Chancellor" />
                  </div>
                </div>
                <div className="text-gray-700 text-justify leading-relaxed space-y-4 font-normal text-sm md:text-base">
                  <p>Delhi Technological University (formerly Delhi College of Engineering) has an illustrious history spanning over 84 years. This prestigious institution is well known throughout the world for its premier education and student centric research & innovations. Delhi Technological University offers various inter-disciplinary and industry-relevant programs in science, engineering, management & allied areas at both the undergraduate and postgraduate levels. This stands as a testament to the ability of the university in educating future leaders.</p>
                  <p>With its great history, Delhi Technological University has carved a niche for itself in the arena of engineering and technological universities around the world. However, every institution has certain responsibilities towards society. In lieu with that, BoM DTU approved the establishment of Centre for Extension and Field Outreach from FY 2018-19 to create a successful rapport between the university and the community.</p>
                  <p>The Centre has since come a long way and still marching ahead and doing an excellent job in the field of outreach activities. We believe that education extend beyond the classroom and into the heart of communities. Through various academic and social activities not only to nine adopted villages of DTU but society at large, we strive to empower individuals and promote social responsibility among our students, faculties and staffs. The center run certificate program in Basic Computer Course and Basic Phython Programming through Lab on Wheel, and its Yoga and Wellness initiatives are gaining popularity day by day among the disadvantaged section of the society.</p>
                  <p>I convey to the Centre for Extension and Field Outreach my best wishes for its future success.</p>
                  <p>I am delighted that the Centre for Extension and Field Outreach is going to publish its Information Bulletin. I am sure it will be useful to faculty, staff, students, residents of DTU and society at large.</p>
                  {/* <p className="font-bold text-blue-900 mt-2 text-right italic">— With best wishes.</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Dean Message */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-1">
            <div className="bg-blue-900 p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <h2 className="text-2xl font-bold text-white font-serif relative z-10 tracking-wide">Message from Dean</h2>
            </div>
            <div className="p-8 flex-1">
              <div className="flex flex-col md:flex-row-reverse gap-6 mb-4 items-start">
                <div className="shrink-0 mx-auto md:mx-0 text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl mx-auto">
                    <img className='w-full h-full object-cover' src='/logo/dean_new.png' alt="Prof. Mini Sreejeth" />
                  </div>
                  <div className="mt-3">
                    <p className="font-bold text-blue-900 text-lg">Prof. Mini Sreejeth</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Dean (Outreach)</p>
                  </div>
                </div>
                <div className="text-gray-700 text-justify leading-relaxed space-y-4 font-normal text-sm md:text-base">
                  <p>Delhi Technological University (formerly Delhi College of Engineering) is one of the India’s leading Engineering and Technological Universities. The University has continuously proved its excellence through its two important verticals, teaching and research. We firmly believe that higher education carries a responsibility not only to advance learning but also to serve the societal needs, which forms the third pillar of the University in addition to academics and research.</p>
                  <p>To adequately discharge its responsibilities to the entire education system and to the society as a whole, the Centre for Extension & Field Outreach has taken up many initiatives, which include conducting classes in adopted villages and schools, conducting Open House / Exploring Engineering programs to enhance STEM awareness among students of secondary and senior secondary levels and enable them to make an informed decision on their career choices. The Centre is also involved in enhancing technological and social awareness for under-privileged through digital / financial literacy programs. We nurture wellness, mindfulness and good health through the Yoga and Wellness program.</p>
                  <p>The Centre has also been involved in one of the ambitious programs of University– Lab on Wheels, for the conduct of “Basic Computer Course” and “Basic Python Programming” for students of various schools of Govt. of NCT. Of Delhi.</p>
                  <p>We firmly belief that the outreach and field extension activities form an essential link between academia and community, ensuring the benefits of education and research reach beyond the walls of the University. Since its inception in 2018, the Centre has carved an elite niche for itself having successfully implemented, and continuing implementation of high value activities, with a number of activities in the pipeline that support the third pillar of the University.</p>
                  <p>I am sanguine that under the visionary guidance of Hon’ble Vice Chancellor, our Team shall continue to successfully deliver its responsibilities towards the society.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Programmes Concluded */}
      <div className='bg-gray-900 py-16 mt-12 text-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center mb-12 gap-4'>
            <div className='h-0.5 flex-1 bg-gradient-to-r from-transparent to-gray-500'></div>
            <h2 className='text-2xl md:text-3xl font-bold text-white font-serif uppercase tracking-widest text-center'>Programmes Concluded</h2>
            <div className='h-0.5 flex-1 bg-gradient-to-l from-transparent to-gray-500'></div>
          </div>
          <Swiper
            speed={800}
            loop={true}
            modules={[Autoplay, A11y, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            className="pb-12"
          >
            {programmes.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-800 bg-gray-800 cursor-pointer">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                      src={img}
                      alt={`Programme ${index + 1}`}
                      className='w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100'
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="h-1 w-12 bg-blue-500 mb-2 rounded-full group-hover:w-20 transition-all duration-300"></div>
                    <span className="text-white font-medium text-lg drop-shadow-md block truncate">Programme {index + 1}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;

