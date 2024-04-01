import { FacebookIcon, InstagramIcon, TwitterIcon } from '@Icon';
import React from 'react';
import { Link } from 'react-router-dom';
import MainBlackLogoImg from 'assets/images';

export default function Footer() {
  return (
    <footer className="bg-fullBlack font-gilroy text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between gap-5">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center hover:cursor-pointer">
              <img
                src={MainBlackLogoImg}
                alt="main-logo"
                className="h-40 mr-3"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:py-4 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray font-semibold">
                <li className="mb-4">
                  <Link to="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray font-semibold">
                <li className="mb-4">
                  <Link to="/" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-white">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <Link to="/" className="hover:text-white">
              Lockers Unlocked™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link to="/" className="text-gray hover:text-gray-900">
              <FacebookIcon color="#000000" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="/" className="text-gray hover:text-gray-900">
              <InstagramIcon color="#000000" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link to="/" className="text-gray hover:text-gray-900">
              <TwitterIcon color="#000000" />
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
