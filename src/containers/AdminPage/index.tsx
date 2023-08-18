import useLocalStorage from '@hooks';
import { AdminLoginForm } from '@components';
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { FormDataType } from 'components/AdminLoginForm/types';

export default function AdminPage() {
  const { value } = useLocalStorage('user', {
    email: '',
    id: '',
    userType: '',
    name: '',
  });
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

  const makeRequest = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email: emailRef?.current?.value.trim() || '',
      password: passwordRef?.current?.value.trim() || '',
    };
    isValidData(data);
  };
  useEffect(() => {
    if (value && value.userType === 'admin') {
      setLoggedIn(true);
    } else if (!value) {
      setLoggedIn(false);
    }
    setLoading(false);
  }, [value]);
  return (
    <div className="font-gilroy">
      {loggedIn ? (
        <p>User Is Logged In</p>
      ) : (
        <AdminLoginForm
          onSubmit={makeRequest}
          emailRef={emailRef}
          loading={loading}
          passwordRef={passwordRef}
          setShowToast={setShowToast}
          showToast={showToast}
        />
      )}
    </div>
  );
}
