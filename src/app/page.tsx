import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 " style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
      <Head>
        <title>Jobox Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center py-5 px-10 shadow-sm" style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
  <div className="logo mt-2">
    <img src="https://joboxhire.com/_next/static/media/Logo.54664a31.svg" alt="Jobox Logo" className="h-10 md:h-12"/>
  </div>
  <nav>
    <ul className="flex space-x-7 text-sm font-medium text-gray-600">
      <li className="mr-4"><a href="#" className="hover:text-blue-200 transition-colors duration-200">Home</a></li> {/* Added margin to the right */}
      <li className="mr-4"><a href="#" className="hover:text-blue-200 transition-colors duration-200">Jobs</a></li> {/* Added margin to the right */}
      <li className="mr-4"><a href="#" className="hover:text-blue-200 transition-colors duration-200">Part-time Jobs</a></li> {/* Added margin to the right */}
      <li className="mr-4"><a href="#" className="hover:text-blue-200 transition-colors duration-200">Free Job Post</a></li> {/* Added margin to the right */}
      <li><a href="#" className="hover:text-blue-200 transition-colors duration-200">Resources</a></li>
    </ul>
  </nav>
</header>


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
      <button className="bg-green-600 text-white py-3 px-8 rounded-md transition-colors duration-200 w-full" style={{ backgroundColor: 'rgb(15 165 124 / var(--tw-bg-opacity))' }}>Login</button> {/* Increased size of the button */}
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




<main className="flex flex-col items-left justify-left flex-1 px-10 py-10 md:py-16 text-left relative" style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))', fontFamily: 'Syne' }}>
<div className="flex-1"></div>
<div className="text-4xl md:text-6xl font-bold text-gray-800 top-0 absolute right-4 ">
    <span className="block font-sans md:Syne">Launch your opportunity</span>
    <span className="block text-3xl md:text-4xl font-sans md:Syne">with a single click!</span>
  </div>

  <div className="mt-6 border border-gray-400 rounded-md w-full md:w-2/4 h-50 flex flex-col md:flex-row absolute right-0 mt-20"> {/* Updated width for responsiveness */}
    <div className="bg-gray-200 p-4 rounded-md mb-4 md:mb-0 md:mr-4 flex-1 "> {/* Added flex-1 class */}
      <h2 className="text-lg font-semibold mb-2">Employer Login/Sign Up</h2>
      <div className="flex mb-2"> {/* New div with flex class */}
        <select className="w-20 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 mb-2 mr-2 w-40">
          {/* Country code options */}
          <option value="+44">+91</option>
        </select>
        <input type="tel" placeholder="Enter your phone number" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 mb-2 text-sm" />
      </div>
      <button className="bg-green-600 text-white py-3 px-8 rounded-md transition-colors duration-200 w-full hover:bg-sky-700" style={{ backgroundColor: 'rgb(15 165 124 / var(--tw-bg-opacity))' }}>Login</button> {/* Increased size of the button */}
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


<div className='md:h-fill-purple-100 no-scrollbar md:h-auto  md:w-auto h-screen w-full overflow-y-auto md:overflow-hidden bg-white  p-4'>
  <h1 className='w-full py-8 text-center font-Syne text-lg font-bold text-text-primary  md:text-3xl lg:text-[3.2rem] '>Companies that Hire from us</h1>
<div className="grid gap-10 w-screen grid-cols-2 place-items-center md:grid-cols-4 p-4 lg:grid-cols-6 bg-white">
  <div className="flex items-center justify-center rounded-md shadow-lg bg-white"><img alt="Companies" draggable="false" loading="lazy" width="133" height="43" decoding="async" data-nimg="1" className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply" src="https://joboxhire.com/_next/static/media/Flix.ae4e3dc7.svg"/></div>
  <div className="flex items-center justify-center rounded-md shadow-lg bg-white"><img alt="Companies" draggable="false" loading="lazy" width="133" height="43" decoding="async" data-nimg="1" className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply" src="https://joboxhire.com/_next/static/media/ACT_Fibernet.4e104666.svg"/></div>
  <div className="flex items-center justify-center rounded-md shadow-lg bg-white"><img alt="Companies" draggable="false" loading="lazy" width="133" height="43" decoding="async" data-nimg="1" className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply" src="https://joboxhire.com/_next/static/media/Ajanta.c14f5889.svg"/></div>
  <div className="flex items-center justify-center rounded-md shadow-lg bg-white"><img alt="Companies" draggable="false" loading="lazy" width="133" height="43" decoding="async" data-nimg="1" className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply" src="https://joboxhire.com/_next/static/media/Altrust.9a065144.svg"/></div>
  <div className="flex items-center justify-center rounded-md shadow-lg bg-white"><img alt="Companies" draggable="false" loading="lazy" width="133" height="43" decoding="async" data-nimg="1" className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply" src="https://joboxhire.com/_next/static/media/Amazon.b926fcec.svg"/></div>
  <div className="flex items-center justify-center rounded-md shadow-lg bg-white"><img alt="Companies" draggable="false" loading="lazy" width="133" height="43" decoding="async" data-nimg="1" className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply" src="https://joboxhire.com/_next/static/media/Au.d61eeb99.svg"/></div>

</div>
</div>



<footer className="flex flex-wrap items-start justify-between w-full h-auto border-t py-10 px-8 text-violet-50 bg-cyan-950">
  {/* First Part */}
  <div className="footer-section mb-8 relative top-0 left-0 right-0 px-2 py-2">
    <img src="https://joboxhire.com/_next/static/media/Logo_Footer.f54ce754.svg" alt="Company Logo" className="w-10 h-auto " />
    <div className="text-xs mt-4">&copy; All Rights Reserved.<br/> Jobox Hire 2024.</div>
  </div>

  {/* Second Part */}
  <div className="footer-section mb-8">
    <div className="footer-section-header mb-4">Legal</div>
    <ul className="list-none">
      <li className="mb-2"><a href="#">Privacy Policy</a></li>
      <li className="mb-2"><a href="#">Our Terms of Service</a></li>
      <li className="mb-2"><a href="#">Terms and Conditions</a></li>
      <li className="mb-2"><a href="#">FAQs</a></li>
      <li className="mb-2"><a href="#">Fraud Alerts</a></li>
      <li className="mb-2"><a href="#">Return/Refund Policy</a></li>
      <li><a href="#">Community Guidelines</a></li>
    </ul>
  </div>

  {/* Third Part */}
  <div className="footer-section mb-8">
    <div className="footer-section-header mb-4">Links</div>
    <ul className="list-none">
      <li className="mb-2"><a href="#">Free Job Alerts</a></li>
      <li className="mb-2"><a href="#">Careers</a></li>
      <li className="mb-2"><a href="#">Contact us</a></li>
      <li className="mb-2"><a href="#">Vulnerability Disclosure Policy</a></li>
      <li className="mb-2"><a href="#">International Jobs</a></li>
      <li><a href="#">Free Job Apply</a></li>
    </ul>
  </div>

  {/* Fourth Part */}
  <div className="footer-section mb-8">
    <div className="footer-section-header mb-4">Download</div>
    <div className="flex flex-col">
      <a href="#" className="mb-2">Download PlayStore</a>
      <a href="#">Download AppStore</a>
    </div>
  </div>
</footer>



    </div>
  );
}
