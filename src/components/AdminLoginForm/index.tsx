import React from 'react';
import { Input, Button, Loader, Toast } from '@components';
import { AdminLoginFormTypes } from './types';

export default function AdminLoginForm({
  onSubmit,
  loading,
  showToast,
  setShowToast,
  emailRef,
  passwordRef,
}: AdminLoginFormTypes) {
  return (
    <>
      {showToast.visible && (
        <Toast
          text={showToast.text}
          visible={showToast.visible}
          setVisible={setShowToast}
        />
      )}
      <h1 className="text-3xl font-bold text-center md:p-0 p-3 mt-5">
        Admin Login
      </h1>
      <form
        className="flex flex-col gap-3 md:mt-8 mt-5 lg:ml-12 lg:mr-12 md:p-5 h-screen"
        onSubmit={onSubmit}
      >
        {/* Email */}
        <div className="md:flex md:flex-col md:mb-4">
          <div className="mb-2 block md:ml-20 lg:ml-32">
            <label htmlFor="email2">Your Email *</label>
          </div>
          <Input
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            ref={emailRef}
            required
            className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
          />
        </div>
        {/* Password */}
        <div className="md:flex md:flex-col">
          <div className="mb-2 block md:ml-20 lg:ml-32">
            <label htmlFor="password2">Your Password *</label>
          </div>
          <Input
            id="password2"
            type="password"
            placeholder="Enter Password"
            ref={passwordRef}
            required
            className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            disabled={loading}
          >
            {loading ? <Loader /> : 'Login'}
          </Button>
        </div>
      </form>
    </>
  );
}
