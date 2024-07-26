import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-[#774EE0] py-2">
              LearnHorizon
            </Link>
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#774EE0]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <div className="flex space-x-2 mb-1">
              <NavLink to="/" big>Home</NavLink>
              <div className="flex flex-col items-center">
                <NavLink to="/admissions" big>Admissions</NavLink>
                <span className="text-xs font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-pulse">
                  2024-2025
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/academics">Academics</NavLink>
              <NavLink to="/faculty">Faculty</NavLink>
              <NavLink to="/students">Students</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <div className="flex flex-col items-start">
              <MobileNavLink to="/admissions" onClick={toggleMenu}>Admissions</MobileNavLink>
              <span className="text-2xl font-semibold bg-gradient-to-r from-purple-900 to-pink-900 text-transparent bg-clip-text animate-pulse ml-3">
                2024-2025
              </span>
            </div>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/academics" onClick={toggleMenu}>Academics</MobileNavLink>
            <MobileNavLink to="/faculty" onClick={toggleMenu}>Faculty</MobileNavLink>
            <MobileNavLink to="/students" onClick={toggleMenu}>Students</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode; big?: boolean }> = ({ to, children, big }) => (
  <Link
    to={to}
    className={`text-gray-600 hover:text-[#774EE0] hover:border-[#774EE0] px-2 py-1 font-medium border-b-2 border-transparent transition duration-300 ease-in-out ${
      big ? 'text-lg' : 'text-sm'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ to: string; onClick: () => void; children: React.ReactNode }> = ({ to, onClick, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:bg-gray-50 hover:text-[#774EE0] block px-3 py-2 rounded-md text-base font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;