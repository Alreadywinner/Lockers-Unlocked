import React, { useRef, useState, FormEvent } from 'react';
import { Button, CustomModal, Input, Loader, Toast } from '@components';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase';
import useLocalStorage from '@hooks';
import { useLocalStorageDataContext } from '@context';
import UserTypeData from 'utils/UserTypeList';
import { LocalStorageDataType } from 'context/localStorageDataContext';
import { MainLargeLogo } from '@Images';
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
    { email: '', id: '', userType: '', name: '', fileSrc: '' },
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
    const data = {
      email: emailRef?.current?.value.trim() || '',
      password: passwordRef?.current?.value.trim() || '',
      userType: userTypeRef.current?.value.toLowerCase() || '',
    };
    if (isValidData(data)) {
      setLoading(true);
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
            fileSrc: user.data().fileSrc || '',
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

      <div className="font-gilroy flex lg:flex-row flex-col lg:mt-0 mt-5">
        <div className="relative lg:w-1/2 lg:h-full w-full h-48 md:mt-0 mt-5 flex justify-end">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-80 z-10"
          />
          <div className="flex flex-col gap-3 w-full px-5 z-20 relative justify-end pb-12">
            <img
              src={MainLargeLogo}
              alt="main-lockers"
              className="lg:w-20 lg:h-20 w-10 h-10"
            />
            <p className="xl:text-4xl md:text-2xl text-base font-bold text-white">
              Welcome To Lockers Unlocked
            </p>
            <p className="text-base font-bold text-white hidden sm:block">
              Explore your favorite teams and players and Your Gear !
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-full w-full h-auto md:mt-5">
          <h1 className="text-3xl text-center font-extrabold hidden md:block md:p-0 p-3 md:mt-0 mt-5">
            Login
          </h1>
          <form
            className="flex flex-col gap-3 md:mt-8 mt-5 lg:ml-12 lg:mr-12 md:p-5"
            onSubmit={makeRequest}
          >
            {/* Email */}
            <div className="md:flex md:flex-col md:mb-4">
              <label htmlFor="email2" className="mb-2">
                Your Email *
              </label>

              <Input
                id="email2"
                type="email"
                placeholder="name@gmail.com"
                ref={emailRef}
                required
                className="h-9 border-solid border-2 border-red rounded pl-2 w-full"
              />
            </div>
            {/* Password */}
            <div className="md:flex md:flex-col md:mb-4">
              <label htmlFor="password2" className="mb-2">
                Your Password *
              </label>
              <Input
                id="password2"
                type="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                ref={passwordRef}
                required
                className="h-9 border-solid border-2 border-red rounded pl-2 w-full"
              />
            </div>
            {/* User Type */}
            <div className="md:flex md:flex-col md:mb-4">
              <label htmlFor="select_team" className="mb-2">
                User Type *
              </label>
              <select
                className="h-9 border-solid border-2 border-red focus:border-black rounded pl-2 w-full"
                name="select_team"
                ref={userTypeRef}
              >
                <option value="">Select User Type</option>
                {UserTypeData.map((element) => (
                  <option key={element.id}>{element.name}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-center p-3">
              <Button
                type="submit"
                className="bg-red400 text-white hover:bg-red500 lg:w-3/12 w-full rounded p-2"
                disabled={loading}
              >
                {loading ? <Loader /> : 'Login'}
              </Button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center lg:px-16 p-3">
            <p className="md:mr-8">Don&apos;t have an account ?</p>
            <Button
              type="button"
              className="bg-red400 text-white mt-1 hover:bg-red500 lg:w-3/12 w-full rounded p-2"
              onClick={onSignUpClick}
              disabled={loading}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}

export default LoginForm;
