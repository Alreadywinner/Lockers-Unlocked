import React, { useRef, useState, FormEvent } from 'react';
import { Button, CustomModal, Input, Loader, Toast } from '@components';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase';
import { FormDataType, SignUpPropType } from './types';

function SignUpForm({
  signUpModal,
  setSignUpModal,
  onLoginClick,
}: SignUpPropType) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);
  const agreeRef = useRef<HTMLInputElement>(null);

  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });
  const [loading, setLoading] = useState(false);

  const isValidData = (data: FormDataType): boolean => {
    const emailReg =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailReg.test(data.email)) {
      setShowToast({
        visible: true,
        text: 'Please Enter a valid email',
      });
      return false;
    }
    if (
      data.name === '' ||
      data.password === '' ||
      data.repeatPassword === ''
    ) {
      setShowToast({
        visible: true,
        text: 'Please enter all fields',
      });
      return false;
    }
    if (data.password !== data.repeatPassword) {
      setShowToast({
        visible: true,
        text: 'passwords should match',
      });
      return false;
    }
    if (!data.agree) {
      setShowToast({
        visible: true,
        text: 'Please agree terms and conditions',
      });
      return false;
    }
    return true;
  };
  const makeRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const email = emailRef?.current?.value.trim() || '';

    // First, check if the email already exists in the collection
    const emailQuery = query(
      collection(db, 'users'),
      where('email', '==', email),
    );
    const emailSnapshot = await getDocs(emailQuery);

    if (!emailSnapshot.empty) {
      // Email already exists, show an error message or take appropriate action
      setShowToast({
        visible: true,
        text: 'Email already exists. Please use a different email.',
      });
      setLoading(false);
      return;
    }
    const data = {
      name: nameRef.current?.value.trim() || '',
      email,
      password: passwordRef?.current?.value.trim() || '',
      repeatPassword: repeatPasswordRef?.current?.value.trim() || '',
      agree: agreeRef.current?.checked || false,
    };
    try {
      if (isValidData(data)) {
        await addDoc(collection(db, 'users'), {
          ...data,
        });
        setShowToast({
          visible: true,
          text: 'User Registered Successfully',
        });
        setSignUpModal(false);
      }
    } catch (err) {
      setShowToast({
        visible: true,
        text: 'Unexpected error occurred',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {showToast.visible && (
        <Toast
          text={showToast.text}
          visible={showToast.visible}
          setVisible={setShowToast}
        />
      )}
      <CustomModal isOpen={signUpModal} onClose={() => setSignUpModal(false)}>
        <form
          className="flex flex-col gap-3 font-gilroy"
          onSubmit={makeRequest}
        >
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
              ref={nameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
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
              ref={repeatPasswordRef}
              required
              className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
            />
          </div>
          {/* Checkbox */}
          <div className="flex items-center justify-center gap-3">
            <input type="checkbox" id="agree" ref={agreeRef} />
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
              disabled={loading}
              className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            >
              {loading ? <Loader /> : 'Sign Up'}
            </Button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center p-3 font-gilroy">
          <p>Have an account already ?</p>
          <Button
            type="button"
            className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            onClick={onLoginClick}
            disabled={loading}
          >
            Login
          </Button>
        </div>
      </CustomModal>
    </>
  );
}

export default SignUpForm;
