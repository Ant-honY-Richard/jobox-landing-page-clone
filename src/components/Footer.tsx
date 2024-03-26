import React from 'react';

const Footer = () => {
  return (
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
          <a href="#" className="mb-2">
            <img className="w-20" src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png"/>
          </a>
          <a href="#">
            <img className="w-20" src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
