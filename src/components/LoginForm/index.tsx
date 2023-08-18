import React, { useRef, useState, FormEvent } from 'react';
import { Button, CustomModal, Input, Loader, Toast } from '@components';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase';
import useLocalStorage from '@hooks';
import { useLocalStorageDataContext } from '@context';
import UserTypeData from 'utils/UserTypeList';
import { LocalStorageDataType } from 'context/localStorageDataContext';
import { FirebaseErrorType, FormDataType, LoginPropType } from './types';

function LoginForm({
  loginModal,
  setLoginModal,
  onSignUpClick,
}: LoginPropType) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const userTypeRef = useRef<HTMLSelectElement>(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });
  const { setLocalStorageItem } = useLocalStorage<LocalStorageDataType>(
    'user',
    { email: '', id: '', userType: '', name: '' },
  );
  const { setLocalStorageData, fetchAllItems } = useLocalStorageDataContext();
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
    if (data.email === '' || data.password === '' || data.userType === '') {
      setShowToast({
        visible: true,
        text: 'Please enter all fields',
      });
      return false;
    }
    return true;
  };
  const makeRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: emailRef?.current?.value.trim() || '',
      password: passwordRef?.current?.value.trim() || '',
      userType: userTypeRef.current?.value.toLowerCase() || '',
    };
    if (isValidData(data)) {
      try {
        // Query Firestore for the user with matching email and password
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users'),
            where('email', '==', data.email),
            where('password', '==', data.password),
            where('userType', '==', data.userType),
          ),
        );
        if (!querySnapshot.empty) {
          const user = querySnapshot.docs[0];
          setShowToast({
            visible: true,
            text: 'User Logged In successfully',
          });

          const toSetLocalData = {
            email: user.data().email,
            id: user.id,
            userType: user.data().userType,
            name: user.data().name,
          };

          setLocalStorageItem({
            ...toSetLocalData,
          });

          setLocalStorageData({ ...toSetLocalData });

          fetchAllItems();

          setLoginModal(false);
        } else {
          setShowToast({
            visible: true,
            text: 'User Not Found ! Try again',
          });
        }
      } catch (error) {
        const authError = error as FirebaseErrorType;
        setShowToast({
          visible: true,
          text: `Error : ${authError.message}`,
        });
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <CustomModal isOpen={loginModal} onClose={() => setLoginModal(false)}>
      {showToast.visible && (
        <Toast
          text={showToast.text}
          visible={showToast.visible}
          setVisible={setShowToast}
        />
      )}
      <div className="font-gilroy">
        <h1 className="text-3xl font-bold text-center md:p-0 p-3 md:mt-0 mt-5">
          Login
        </h1>
        <form
          className="flex flex-col gap-3 md:mt-8 mt-5 lg:ml-12 lg:mr-12 md:p-5"
          onSubmit={makeRequest}
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
          {/* User Type */}
          <div className="md:flex md:flex-col">
            <div className="mb-2 block md:ml-20 lg:ml-32">
              <label htmlFor="select_team">User Type *</label>
            </div>
            <select
              className="h-9 border-solid border-2 border-red rounded pl-2 md:w-9/12 md:self-center w-full"
              name="select_team"
              ref={userTypeRef}
            >
              <option value="">Select User Type</option>
              {UserTypeData.map((element) => (
                <option key={element.id}>{element.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
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
        <div className="flex flex-col justify-center items-center p-3">
          <p>Don&apos;t have an account ?</p>
          <Button
            type="button"
            className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
            onClick={onSignUpClick}
            disabled={loading}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </CustomModal>
  );
}

export default LoginForm;
