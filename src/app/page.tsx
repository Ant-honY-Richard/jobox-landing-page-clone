import Company from '@/components/Company';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import UserReviews from '@/components/Userreview';
import Head from 'next/head';
import React from 'react';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 " style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
      <Head>
        <title>Jobox Landing</title>
        <link rel="icon" href="https://joboxhire.com/_next/static/media/Logo.54664a31.svg" />
      </Head>

<Navbar/>


<main className="flex flex-col items-left justify-left flex-1 px-20 py-20 md:py-16 text-left relative bg-gray-50" style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))', fontFamily: 'Syne' }}>
  <div className="text-4xl md:text-6xl font-bold text-gray-800">
    <span className="block font-sans md:Syne">Launch your career</span>
    <span className="block text-3xl md:text-4xl font-sans md:Syne">with a single click!</span>
  </div>

  <div className="mt-6 border border-gray-400 rounded-md w-full md:w-2/4 h-50 flex flex-col md:flex-row"> {/* Updated width for responsiveness */}
    <div className="bg-gray-200 p-4 rounded-md mb-4 md:mb-0 md:mr-4 flex-1"> {/* Added flex-1 class */}
      <h2 className="text-lg font-semibold mb-2">Candidate Login/Sign Up</h2>
      <div className="flex mb-2"> {/* New div with flex class */}
        <select className="w-20 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 mb-2 mr-2 w-40">
          {/* Country code options */}
          <option value="+44">+91</option>
        </select>
        <input type="tel" placeholder="Enter your phone number" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 mb-2 text-sm" />
      </div>
      <button className="bg-teal-600 text-white py-3 px-8 rounded-md transition-colors duration-200 w-full transition-colors duration-200 w-full hover:bg-teal-700">Login</button> {/* Increased size of the button */}
    </div>
    <div className="hidden md:block absolute right-4"> {/* Show the image on medium screens and above */}
      <img src="https://joboxhire.com/_next/static/media/Landing__HeroSection.4bcce3dd.svg" alt="Hero Section" className="w-11/12 h-11/12" />
    </div>
  </div>
  
  <div className="w-3/4 bg-white h-56 rounded-md px-5 py-5 top-0 right-60 mt-24 space-x-1 grid-cols-1 "> {/* Moved the div down and added mt-8 for spacing */}
    <div className="whitespace-normal">
      <h6 className="text-3xl md:text-4xl font-sans md:Syne text-center">Positions Recruited By Us</h6>
    </div>
  </div>
</main>




<main className="flex flex-col items-left justify-left flex-1 px-10 py-10 md:py-16 text-left relative " style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))', fontFamily: 'Syne' }}>
<div className="flex-1"></div>
<div className="text-4xl md:text-6xl font-bold text-gray-800 top-0 absolute right-4">
    <span className="block font-sans md:Syne">Launch your opportunity</span>
    <span className="block text-3xl md:text-4xl font-sans md:Syne">with a single click!</span>
  </div>

  <div className="border border-gray-400 rounded-md w-full md:w-2/4 h-50 flex flex-col md:flex-row absolute right-0 mt-32 top-0"> {/* Updated width for responsiveness */}
    <div className="bg-gray-200 p-4 rounded-md mb-4 md:mb-0 md:mr-4 flex-1 "> {/* Added flex-1 class */}
      <h2 className="text-lg font-semibold mb-2">Employer Login/Sign Up</h2>
      <div className="flex mb-2"> {/* New div with flex class */}
        <select className="w-20 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 mb-2 mr-2 w-40">
          {/* Country code options */}
          <option value="+44">+91</option>
        </select>
        <input type="tel" placeholder="Enter your phone number" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 mb-2 text-sm" />
      </div>
      <button className="bg-teal-500 text-white py-3 px-8 rounded-md transition-colors duration-200 w-full hover:bg-teal-700" >Login</button> {/* Increased size of the button */}
    </div>
  </div>
   <div className="hidden md:block absolute right-11/12"> {/* Show the image on medium screens and above */}
      <img src="https://joboxhire.com/_next/static/media/Landing__Person2.9292c4c5.svg" alt="Hero Section" className="w-11/12 h-11/12 mt-2" />
    </div>
  <div className="w-3/4 bg-white h-40 rounded-md px-5 py-5 top-0 right-96 mt-72 space-x-1 grid-cols-1 place-self-end"> {/* Moved the div down and added mt-8 for spacing */}
    <div className="whitespace-normal">
      <h6 className="text-3xl md:text-4xl font-sans md:Syne text-center">Candidates Recruited From Us</h6>
    </div>
  </div>
</main>

<Company/>


<div className="min-h-screen bg-gray-50 items-center justify-center" style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
  <h1 className='text-4xl md:text-6xl font-bold text-gray-800 text-center py-40 mt-20 lg:py-0'><u>Jobs</u></h1>
  <div className='flex flex-col lg:flex-row min-h-screen bg-gray-50 justify-center' style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
  <div className="flex flex-row items-center justify-center w-full lg:w-3/4">
    <div className="w-full lg:w-1/2 px-4 py-20"><img alt="job Section" loading="lazy" width="923" height="730" decoding="async" data-nimg="1" src="https://joboxhire.com/_next/static/media/Landing__job-section'.d6454052.svg"/></div>
    <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
      <p className="w-72 py-4 text-center font-syne text-lg font-semibold text-text-primary ">Discover your dream job today and take the next step in your career!</p>
      <a className="flex items-center justify-center rounded-md border-2 border-teal-400 bg-teal-400 px-4 py-2 font-syne text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-teal-500 hover:border-cyan-500 lg:text-lg" href="/#candCard">Apply Jobs</a>
      </div></div>
  </div>
</div>




<div className="min-h-screen bg-gray-50 items-center justify-center" style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
  <h1 className='text-4xl md:text-6xl font-bold text-gray-800 text-center py-40 lg:py-0'><u>Part Time Jobs</u></h1>
  <div className='min-h-screen bg-gray-50 justify-center' style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
  <img alt="job Section" className="mt-28"loading="lazy" width="1376" height="458" decoding="async" data-nimg="1" src="https://joboxhire.com/_next/static/media/Landing__part-time-job-section.553aabf9.svg" />
  <div className="flex w-full flex-col items-center justify-center">
    <p className="w-72 pb-4 pt-16 text-center font-syne text-lg font-semibold text-text-primary">Start your job search journey now and unlock new opportunities!</p>
    <a className="flex items-center justify-center rounded-md border-2 border-teal-400 bg-teal-400 px-4 py-2 font-syne text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-teal-500 hover:border-cyan-500 lg:text-lg mb-20" href="/#empCard">Post Job</a>
    </div>
  <UserReviews/>
    </div></div>

<Footer/>


    </div>
  );
}
