import React from 'react';
import { Button, CustomModal, Input } from '@components';
import { SignUpPropType } from './types';

function SignUpForm({
  signUpModal,
  setSignUpModal,
  onLoginClick,
}: SignUpPropType) {
  return (
    <CustomModal isOpen={signUpModal} onClose={() => setSignUpModal(false)}>
      <div className="font-gilroy">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form className="flex flex-col gap-3 md:mt-8 mt-5 lg:ml-12 lg:mr-12 md:p-5">
          {/* Email */}
          <div className="md:flex md:flex-col md:mb-4">
            <div className="mb-2 block md:ml-24">
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
            <div className="mb-2 block md:ml-24">
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
          <div className="flex justify-center mt-5">
            <Button
              type="submit"
              className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center p-3">
          <p>Have an account already ?</p>
          <Button
            type="button"
            className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            onClick={onLoginClick}
          >
            Login
          </Button>
        </div>
      </div>
    </CustomModal>
  );
}

export default SignUpForm;
