import React from "react";
import checkinn from "../assets/CheckInn.svg";


const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
    <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);


const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.5 0-1.4-.5-2.5-1.3-3.4.1-.3.5-1.6 0-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.1 2.8 5 3.2 5 3.2c-.5 1.6-.1 2.9 0 3.2-.8.9-1.3 2-1.3 3.4 0 5.1 2.7 6.2 5.5 6.5-.6.5-1 1.4-1 2.8v4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300 px-4 sm:px-6 lg:px-12 py-12"

>
      <div className="container mx-auto">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          
          
          <div className="flex flex-col items-center md:items-start">
            <img src={checkinn} alt="CheckInn Logo" className="h-7 mb-4" />
            <p className="max-w-xs text-sm">
              Your premier destination for finding and booking hotels that fit your style and budget.
            </p>
            <div className="flex items-center gap-4 mt-6">
                
              <a href="#" className="hover:text-white transition-colors duration-300">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <LinkedinIcon />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <GithubIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white tracking-wider mb-4">Explore</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white hover:underline transition-all">Home</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Destinations</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Special Offers</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Hotel Collections</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white tracking-wider mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white hover:underline transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Blog</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Careers</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white tracking-wider mb-4">Support</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white hover:underline transition-all">Contact Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">FAQ</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CheckInn. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 