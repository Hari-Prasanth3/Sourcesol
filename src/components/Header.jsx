import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-light">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              id="mobile-menu-button"
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://www.sourcesol.co.in/en/assets/img/logo.png"
                alt="SourceSol Logo"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className={`sm:block  ${isMobileMenuOpen ? 'md:visible hidden'  : 'hidden'}`}>
              <div className={`flex  space-x-4`}>
                <a
                  href="index.html"
                  className="hover:bg-gray-300 hover:text-white px-3 py-2 text-sm font-medium active"
                >
                  Home
                </a>
                <a
                  href="services.html"
                  className="hover:bg-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="industries.html"
                  className="hover:bg-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Industries
                </a>
                <a
                  href="case-studies.html"
                  className="hover:bg-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Case Studies
                </a>
                <a
                  href="about-us.html"
                  className="hover:bg-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="contact-us.html"
                  className="hover:bg-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="index.html"
            className="hover:bg-gray-300 hover:text-white block px-3 py-2 text-base font-medium active"
          >
            Home
          </a>
          <a
            href="services.html"
            className="hover:text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Services
          </a>
          <a
            href="industries.html"
            className="hover:text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Industries
          </a>
          <a
            href="case-studies.html"
            className="hover:text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Case Studies
          </a>
          <a
            href="about-us.html"
            className="hover:text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            About Us
          </a>
          <a
            href="contact-us.html"
            className="hover:text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
