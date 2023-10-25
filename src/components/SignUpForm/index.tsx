import React, { useRef, useState, FormEvent, useEffect } from 'react';
import { Button, CustomModal, Input, Loader, Toast } from '@components';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db, storage } from 'firebase';
import UserTypeData from 'utils/UserTypeList';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';
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
  const userTypeRef = useRef<HTMLSelectElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileData, setFileData] = useState<FileList | null>(null);

  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });
  const [loading, setLoading] = useState(false);
  const [showProceedButton, setShowProceedButton] = useState(false);
  const addNewFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = event.target.files;
    setFileData(temp);
  };

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
      data.repeatPassword === '' ||
      data.userType === '' ||
      data.fileData === null
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

  const ProceedToSaveUser = async () => {
    const data = {
      name: nameRef.current?.value.trim() || '',
      email: emailRef.current?.value.trim() || '',
      password: passwordRef?.current?.value.trim() || '',
      repeatPassword: repeatPasswordRef?.current?.value.trim() || '',
      userType: userTypeRef.current?.value.toLowerCase() || '',
      fileData: fileData || null,
      fileSrc: '',
      agree: agreeRef.current?.checked || false,
    };
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        setLoading(true);
        if (data.fileData !== null && userCredential.user.emailVerified) {
          const fileBlob = new Blob([data.fileData.item(0) as File]);
          const storageRef = ref(
            storage,
            `profile/${data.fileData.item(0)?.name}`,
          );
          const snapshot = await uploadBytes(storageRef, fileBlob);
          const downloadURL = await getDownloadURL(snapshot.ref);
          const { fileData: dataFileData, ...dataWithoutFileData } = data;
          dataWithoutFileData.fileSrc = downloadURL;
          await addDoc(collection(db, 'users'), {
            ...dataWithoutFileData,
          });
          setShowToast({
            visible: true,
            text: 'User Registered Successfully',
          });
          setSignUpModal(false);
        } else {
          setShowToast({
            text: 'Please verify your email first',
            visible: true,
          });
        }
      })
      .catch((error) => {
        setShowToast({
          text: `${error}`,
          visible: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
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
      userType: userTypeRef.current?.value.toLowerCase() || '',
      fileData: fileData || null,
      fileSrc: '',
      agree: agreeRef.current?.checked || false,
    };
    try {
      if (isValidData(data)) {
        // Create the user account in Firebase Authentication (unverified)
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );

        // Send an email verification link to the user
        sendEmailVerification(userCredential.user)
          .then(() => {
            setShowToast({
              text: 'A Verification Email has been sent to the email',
              visible: true,
            });
          })
          .catch((err) => {
            setShowToast({
              text: `Error : ${err}`,
              visible: true,
            });
          });
        setShowProceedButton(true);
      }
    } catch (err) {
      setShowToast({
        visible: true,
        text: `Unexpected error occurred ${err}`,
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
          {/* Upload Profile Picture */}
          <div className="md:flex md:flex-col mb-1 block md:ml-20 xl:ml-36 lg:ml-28">
            <label htmlFor="item_image">Choose Profile Picture *</label>
            <div className="block">
              <span className="sr-only">Choose Image for an Item</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
              "
                accept="image/*"
                name="item_image"
                id="item_image"
                multiple={false}
                onChange={addNewFiles}
                ref={fileInputRef}
                required
              />
            </div>
          </div>
          {/* User Type */}
          <div className="md:flex md:flex-col">
            <div className="mb-1 block md:ml-20 xl:ml-36 lg:ml-28">
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
            {showProceedButton ? (
              <Button
                type="button"
                disabled={loading}
                onClick={ProceedToSaveUser}
                className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
              >
                {loading ? <Loader /> : 'Proceed'}
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={loading}
                className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-full rounded p-2"
              >
                {loading ? <Loader /> : 'Sign Up'}
              </Button>
            )}
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
