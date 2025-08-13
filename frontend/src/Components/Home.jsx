
// import React from 'react';
// import { NavLink } from "react-router-dom";
// import { Autoplay, A11y, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import "swiper/css/autoplay";
// import "swiper/css/controller";
// import { useSwiper } from 'swiper/react';
// import { useState,useEffect } from 'react';

// const programmes = [
//   "../../Programmes/img1.jpg",
//   "../../Programmes/img2.jpg",
//   "../../Programmes/img3.jpg",
//   "../../Programmes/img4.jpg",
//   "../../Programmes/img5.jpg",
//   "../../Programmes/img6.jpg",
// ];

// const images = [
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg"
// ];

// function Home() {
//   const swiper = useSwiper();


//   // This effect will listen for the scroll event
//   const [showNav, setShowNav] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // This effect will listen for the scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > 120 && currentScrollY > lastScrollY) {
//         // If the scroll is greater than 50px and scrolling down
//         setShowNav(true);
//       } else if (currentScrollY < lastScrollY) {
//         // When scrolling up, hide the nav
//         setShowNav(false);
//       }
      
//       // Update the last scroll position
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <div className={`${showNav?'transform translate-y-[1.35rem]':null} `}>

//       {/* Swiper Carousel */}
//       <div>
//         {/* <Swiper
//           speed={500}
//           loop={true}
//           cssMode={true}
//           modules={[Autoplay, A11y]}
//           spaceBetween={0}
//           slidesPerView={1}
//           autoplay
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}> */}
//               <img
//                 src="../../logo/delhi_technological_university_formerly_dce_cover.jpeg"
                
//                 className=' rounded-b-sm w-full max-w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover mx-auto select-none'
//               />
//             {/* </SwiperSlide>
//           ))}
//         </Swiper> */}
//       </div>

//       {/* About and Notices Section */}
//       <div className="flex flex-col md:flex-row mt-10 ml-3">
//         {/* About Section */}
//         <div className="w-full md:w-[60%] pr-0 md:pr-5 mb-10 md:mb-0">
//           <div>
//             <h2 className="text-xl md:text-2xl font-bold font-serif">ABOUT DTU</h2>
//             <p className="text-sm md:text-base mt-2 leading-7 tracking-wide text-justify text-slate-600 font-[Helvetica]">
//             Delhi Technological University (DTU), formerly known as Delhi College of Engineering (DCE), 
//                         is a prestigious institution located in Rohini, Delhi. Established in 1941 as Delhi Polytechnic, 
//                         DTU gained university status in 2009 and has since been a leading center for education in engineering, 
//                         technology, and applied sciences. Known for its high academic standards, DTU offers a range of undergraduate, 
//                         postgraduate, and doctoral programs, particularly excelling in disciplines like Computer Science, Electronics, 
//                         Mechanical, and Civil Engineering. The university is renowned for its strong research culture and innovative mindset,
//                          with numerous collaborations in the industrial and governmental sectors. It has a vibrant entrepreneurial ecosystem, 
//                          supported by its Technology Incubation and Entrepreneurship Development Center (TIEDC), which fosters startups and promotes innovation. 
//                          DTU's large campus, modern infrastructure, and a variety of student clubs and societies contribute to a well-rounded academic and social experience, making it one of India's top engineering institutions. 
//                          The university is also highly regarded for its excellent placement record and industry connections, further establishing its reputation as a premier engineering school in India.
//             </p>
//           </div>
//           <div className="mt-5">
//             <h2 className="text-xl md:text-2xl font-bold font-serif">ABOUT CENTRE OF EXTENSION AND FIELD OUTREACH</h2>
//             <p className="text-sm md:text-base mt-2 leading-7 tracking-wide text-justify text-slate-600 font-[Helvetica]">
//               {/* About Outreach text */}
//             The Centre of Extension and Field Outreach at Delhi Technological University (DTU) plays a 
//                         vital role in fostering community engagement, societal impact, and knowledge dissemination beyond the 
//                         traditional academic setting. This department is focused on creating a bridge between the university's 
//                         academic and research initiatives and the wider community, promoting social responsibility and holistic 
//                         development.The primary aim of the department is to extend the university's expertise and resources to 
//                         benefit society, addressing social, economic, and environmental challenges. Through various outreach 
//                         programs, workshops, seminars, and collaborations with industries and government bodies, the department 
//                         encourages active participation of students and faculty in initiatives that serve the community. 
//                         These activities may include skill development programs, awareness campaigns, environmental sustainability 
//                         efforts, and technology-driven solutions for societal problems.In addition, the department often 
//                         works with NGOs, local communities, and governmental agencies to implement projects that can have a 
//                         tangible impact on society, particularly focusing on underprivileged groups. By involving students in 
//                         such activities, the Department of Extension and Outreach at DTU helps instill a sense of social responsibility 
//                         and equips them with practical experience in solving real-world challenges.
//             </p>
//           </div>

//           {/* Notices Section */}
//           <div className="w-full ml-[2.5%] mt-10 h-64 border-2 border-black border-double rounded-2xl">
//             <div className="text-xl md:text-2xl pt-1 font-bold text-center font-sans text-white w-full h-10 bg-blue-800 rounded-t-2xl">NOTICES</div>
//             <ul className="p-5 text-slate-700">
//               <li className="mb-2">Notice 1: Upcoming Events...</li>
//               <li className="mb-2">Notice 2: Important Deadlines...</li>
//               <li className="mb-2">Notice 3: Latest Updates...</li>
//             </ul>
//           </div>
//         </div>

//         {/* Message from VC and Dean */}
//         <div className="w-full ml-[2.5%] md:w-[35%] border-2 border-black border-double rounded-2xl">
//           <div className='w-full font-bold text-xl text-slate-800 font-serif mt-2 ml-2'>
//             Message from Hon'ble VC
//           </div>
//           <div className='flex w-auto'>
//             <div className='w-auto '>
//               <img className='w-[1200px] rounded-sm ml-2 mt-5 h-32' src='../../logo/vc.jpg'/>
//             </div>
//             <div className='leading-7 text-md text-justify text-slate-600 ml-5 mr-5 mt-2'>
//               <div>
//                 {/* VC message */}
//             Delhi Technological University (DTU), a globally renowned institution for its premier education,
//              established the Centre for Extension and Field Outreach in 2018 to fulfill its social 
//              responsibilities. This Centre plays a crucial role in fostering university-community 
//              collaboration, with students and faculty working to devise innovative solutions to local 
//              and societal challenges. The Centre’s efforts, supported by a strong administrative framework,
//               continue to advance outreach initiatives, benefiting both the DTU community and society at large.
//             </div>
//               <div className='font-bold'>
//                 "DTU seamlessly combines academic brilliance with social commitment."
//               </div>
//             </div>
//           </div>

//           <div className='w-full font-bold text-xl text-slate-800 font-serif mt-5 ml-2'>
//             Message from Dean
//           </div>
//           <div className='flex w-auto'>
//             <div className='w-auto '>
//               <img className='w-[1400px] rounded-sm ml-2 mt-5 h-32' src='../../logo/dean.jpg'/>
//             </div>
//             <div className='leading-7 text-md text-justify text-slate-600 ml-5 mr-5 mt-2'>
//               {/* Dean's message */}
//               Delhi Technological University is one of India’s leading technological universities. 
//               The university is continuously striving and proved through the two important pillars 
//               like teaching and research. The start of Centre for Outreach and Extension as the third
//                pillar is a major step taken by the university towards its responsibility for the deprived
//                 off section of the society, who have not got the opportunity of joining the university 
//                 and also makes aware the younger students about the professional education. 
//                 A number of steps has been taken by the center in this regard like adopting villages,
//                  conducting classes in the school of adopted villages, conducting open house for the 
//                  schools, conducting exploring engineering programmes for X, XI and XII students,etc.
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Programmes Section */}
//       <div className='mt-20 border-2 border-slate-700 border-double pb-10'>
//         <div className='w-full font-bold text-xl text-slate-50 bg-blue-800 h-10 p-1 text-center font-serif mb-10'>Programmes Concluded</div>
//         <Swiper
//           speed={100}
//           loop={true}
//           cssMode={true}
//           modules={[Autoplay, A11y]}
//           spaceBetween={0}
//           slidesPerView={2}
//           autoplay
//         >
//           {programmes.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`slide-${index + 1}`}
//                 className='w-[80%] rounded-md max-w-full h-[100px] md:h-[200px] lg:h-[300px] object-cover mx-auto select-none'
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { NavLink } from "react-router-dom";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import { useSwiper } from 'swiper/react';
import { useState,useEffect } from 'react';

const programmes = [
  "../../Programmes/img1.jpg",
  "../../Programmes/img2.jpg",
  "../../Programmes/img3.jpg",
  "../../Programmes/img4.jpg",
  "../../Programmes/img5.jpg",
  "../../Programmes/img6.jpg",
];

// const images = [
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg",
//   "../../logo/delhi_technological_university_formerly_dce_cover.jpeg"
// ];

function Home() {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // This effect will listen for the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        // If the scroll is greater than 120px and scrolling down
        setShowNav(true);
      } else if (currentScrollY < lastScrollY) {
        // When scrolling up, hide the nav
        setShowNav(false);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`${showNav ? 'transform translate-y-[1.35rem]' : null}`}>
      {/* Swiper Carousel */}
      <div>
        <Swiper
          speed={500}
          loop={true}
          cssMode={true}
          modules={[Autoplay, A11y]} // Autoplay and A11y as modules
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 2500 }} // autoplay with a delay of 2.5 seconds
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className='rounded-b-sm w-full max-w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover mx-auto select-none'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About and Notices Section */}
      <div className="flex flex-col md:flex-row mt-10 ml-3">
        {/* About Section */}
        <div className="w-full md:w-[60%] pr-0 md:pr-5 mb-10 md:mb-0">
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-serif">ABOUT DTU</h2>
            <p className="text-sm md:text-base mt-2 leading-7 tracking-wide text-justify text-slate-600 font-[Helvetica]">
              {/* DTU text content */}
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl md:text-2xl font-bold font-serif">ABOUT CENTRE OF EXTENSION AND FIELD OUTREACH</h2>
            <p className="text-sm md:text-base mt-2 leading-7 tracking-wide text-justify text-slate-600 font-[Helvetica]">
              {/* Outreach text content */}
            </p>
          </div>

          {/* Notices Section */}
          <div className="w-full ml-[2.5%] mt-10 h-64 border-2 border-black border-double rounded-2xl">
            <div className="text-xl md:text-2xl pt-1 font-bold text-center font-sans text-white w-full h-10 bg-blue-800 rounded-t-2xl">NOTICES</div>
            <ul className="p-5 text-slate-700">
              <li className="mb-2">Notice 1: Upcoming Events...</li>
              <li className="mb-2">Notice 2: Important Deadlines...</li>
              <li className="mb-2">Notice 3: Latest Updates...</li>
            </ul>
          </div>
        </div>

        {/* Message from VC and Dean */}
        <div className="w-full ml-2 md:w-[38%] border-2 border-black border-double rounded-2xl">
          <div className='w-full font-bold text-xl text-slate-800 font-serif mt-2 ml-2'>
            Message from Hon'ble VC
          </div>
          <div className='flex w-auto'>
            <div className='w-auto '>

              <img className='w-[1200px] rounded-sm ml-2 mt-5 h-32' src='../../logo/vc.jpg' />
            </div>
            <div className='leading-7 text-md text-justify text-slate-600 ml-5 mr-5 mt-2'>
              {/* VC message */}
            </div>
          </div>

          <div className='w-full font-bold text-xl text-slate-800 font-serif mt-5 ml-2'>
            Message from Dean
          </div>
          <div className='flex w-auto'>
            <div className='w-auto '>
              <img className='w-[1400px] rounded-sm ml-2 mt-5 h-32' src='../../logo/dean.jpg' />
            </div>
            <div className='leading-7 text-md text-justify text-slate-600 ml-5 mr-5 mt-2'>
              {/* Dean's message */}
            </div>
          </div>
        </div>
      </div>

      {/* Programmes Section */}
      <div className='mt-20 border-2 border-slate-700 border-double pb-10'>
        <div className='w-full font-bold text-xl text-slate-50 bg-blue-800 h-10 p-1 text-center font-serif mb-10'>Programmes Concluded</div>
        <Swiper
          speed={100}
          loop={true}
          cssMode={true}
          modules={[Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          autoplay={{ delay: 2500 }} // autoplay with a delay of 2.5 seconds
        >
          {programmes.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className='w-[80%] rounded-md max-w-full h-[100px] md:h-[200px] lg:h-[300px] object-cover mx-auto select-none'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;

