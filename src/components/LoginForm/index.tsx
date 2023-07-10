import React from 'react';
import { Button, CustomModal, Input } from '@components';
import { LoginPropType } from './types';

function LoginForm({ loginModal, setLoginModal }: LoginPropType) {
  return (
    <CustomModal isOpen={loginModal} onClose={() => setLoginModal(false)}>
      <div className="font-gilroy">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form className="flex flex-col gap-3 md:mt-8 mt-5 lg:ml-12 lg:mr-12 md:p-5">
          {/* Email */}
          <div>
            <div className="mb-2 block">
              <label htmlFor="email2">Your Email</label>
            </div>
            <Input
              id="email2"
              type="email"
              placeholder="name@gmail.com"
              // ref={emailRef}
              required
              className="h-9 border-solid border-2 border-red rounded pl-2 w-full"
            />
          </div>
          {/* Password */}
          <div>
            <div className="mb-2 block">
              <label htmlFor="password2">Your Password</label>
            </div>
            <Input
              id="password2"
              type="password"
              placeholder="Enter Password"
              // ref={passwordRef}
              required
              className="h-9 border-solid border-2 border-red rounded pl-2 w-full"
            />
          </div>
          <div className="flex justify-center mt-5">
            <Button
              type="submit"
              className="bg-red400 text-white hover:bg-red500 w-2/5 rounded p-2"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </CustomModal>
  );
}

export default LoginForm;
