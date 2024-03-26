import React from 'react'

const Navbar = () => {
  return (
    <div>      <header className="flex justify-between items-center py-5 px-10 shadow-sm" style={{ backgroundColor: 'rgb(226 231 233 / var(--tw-bg-opacity))' }}>
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
  </header></div>
  )
}

export default Navbar