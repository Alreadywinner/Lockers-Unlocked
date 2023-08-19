import useLocalStorage from '@hooks';
import { AdminLoginForm } from '@components';
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { FormDataType } from 'components/AdminLoginForm/types';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase';
import { FirebaseErrorType } from 'components/LoginForm/types';
import { useLocalStorageDataContext } from '@context';
import { AdminDashboard } from '@containers';

export default function AdminPage() {
  const { value, setLocalStorageItem } = useLocalStorage('user', {
    email: '',
    id: '',
    userType: '',
    name: '',
  });
  const {
    setLocalStorageData,
    fetchAllItems,
    loading: apiLoading,
  } = useLocalStorageDataContext();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
    if (data.email === '' || data.password === '') {
      setShowToast({
        visible: true,
        text: 'Please enter all fields',
      });
      return false;
    }
    return true;
  };

  const makeRequest = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email: emailRef?.current?.value.trim() || '',
      password: passwordRef?.current?.value.trim() || '',
      userType: 'admin',
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
  const loginUser = async () => {
    await fetchAllItems();
    setLoggedIn(true);
  };
  useEffect(() => {
    setLoading(true);
    if (value && value.userType === 'admin') {
      loginUser();
    } else if (!value) {
      setLoggedIn(false);
    }
    setLoading(false);
  }, [value]);
  return (
    <div className="font-gilroy">
      {loggedIn && !loading && !apiLoading ? (
        <AdminDashboard />
      ) : (
        <AdminLoginForm
          onSubmit={makeRequest}
          emailRef={emailRef}
          loading={loading || apiLoading}
          passwordRef={passwordRef}
          setShowToast={setShowToast}
          showToast={showToast}
        />
      )}
    </div>
  );
}
