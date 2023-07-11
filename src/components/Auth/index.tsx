import React, { useState } from 'react';
import { LoginForm, SignUpForm } from '@components';

function Auth() {
  const [loginModal, setLoginModal] = useState(true);
  const [signUpModal, setSignUpModal] = useState(false);

  if (signUpModal) {
    return (
      <SignUpForm
        signUpModal={signUpModal}
        setSignUpModal={setSignUpModal}
        onLoginClick={() => {
          setLoginModal(true);
          setSignUpModal(false);
        }}
      />
    );
  }
  return (
    <LoginForm
      loginModal={loginModal}
      setLoginModal={setLoginModal}
      onSignUpClick={() => {
        setSignUpModal(true);
        setLoginModal(false);
      }}
    />
  );
}

export default Auth;
