import { FacebookIcon, InstagramIcon } from '@Icon';
import Button from 'components/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      name: 'Home',
      routeName: '/',
      key: 1,
    },
    { name: 'NFL', routeName: '/', key: 2 },
    { name: 'NBA', routeName: '/', key: 3 },
    { name: 'MLB', routeName: '/', key: 4 },
    { name: 'College Teams', routeName: '/', key: 5 },
    { name: 'D1 Sports', routeName: '/', key: 6 },
    { name: 'Auctions', routeName: '/', key: 7 },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-gilroy">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bold text-xl">
              Lockers Unlocked
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {navLinks.map((element) => {
                  return (
                    <Link
                      to={element.routeName}
                      key={element.key}
                      className="ml-4 px-3 py-2  rounded-md text-sm font-bold text-black hover:text-gray hover:bg-gray-50"
                    >
                      {element.name}
                    </Link>
                  );
                })}
                <Button
                  className="py-2  px-4 bg-red text-white rounded-lg hover:font-bold hover:cursor-pointer"
                  text="Login"
                />
              </div>
            </div>
          </div>
          <div className="mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <InstagramIcon color="#ffc600" aria-hidden="true" />
              ) : (
                <FacebookIcon color="#3fced3" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
