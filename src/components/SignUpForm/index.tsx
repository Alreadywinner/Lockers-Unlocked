import React from 'react';
import { Button, CustomModal, Input } from '@components';
import { Link } from 'react-router-dom';
import { SignUpPropType } from './types';

function SignUpForm({
  signUpModal,
  setSignUpModal,
  onLoginClick,
}: SignUpPropType) {
  // md:mt-8 mt-5 lg:ml-12 lg:mr-12 md:p-5
  return (
    <CustomModal isOpen={signUpModal} onClose={() => setSignUpModal(false)}>
      <form className="flex flex-col gap-3 font-gilroy">
        <h1 className="text-3xl font-bold text-center md:p-0 p-3 md:mt-0 mt-5">
          Sign Up
        </h1>
        {/* Your Name */}
        <div className="md:flex md:flex-col">
          <div className="mb-1 block md:ml-20 xl:ml-36 lg:ml-28">
            <label htmlFor="name">Your Name *</label>
          </div>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            // ref={emailRef}
            required
            className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
          />
        </div>
        {/* Email */}
        <div className="md:flex md:flex-col">
          <div className="mb-1 block md:ml-20 xl:ml-36 lg:ml-28">
            <label htmlFor="email2">Your Email *</label>
          </div>
          <Input
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            // ref={emailRef}
            required
            className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
          />
        </div>
        {/* Password */}
        <div className="md:flex md:flex-col">
          <div className="mb-1 block md:ml-20 xl:ml-36 lg:ml-28">
            <label htmlFor="password2">Your Password *</label>
          </div>
          <Input
            id="password2"
            type="password"
            placeholder="Enter Password"
            // ref={passwordRef}
            required
            className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
          />
        </div>
        {/* Repeat Password */}
        <div className="md:flex md:flex-col">
          <div className="mb-1 block md:ml-20 xl:ml-36 lg:ml-28">
            <label htmlFor="repeat-password">Repeat Password *</label>
          </div>
          <Input
            id="repeat-password"
            type="password"
            placeholder="Enter Password"
            // ref={passwordRef}
            required
            className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
          />
        </div>
        {/* Checkbox */}
        <div className="flex items-center justify-center gap-3">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            I agree with the &nbsp;
            <Link
              to="/terms-and-conditions"
              className="text-blue-600 hover:underline"
            >
              terms and conditions
            </Link>
          </label>
        </div>
        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center p-3 font-gilroy">
        <p>Have an account already ?</p>
        <Button
          type="button"
          className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
          onClick={onLoginClick}
        >
          Login
        </Button>
      </div>
    </CustomModal>
  );
}

export default SignUpForm;
