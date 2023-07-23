import { FirebaseError } from 'firebase/app';

export type LoginPropType = {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSignUpClick: () => void;
};

export type FormDataType = {
  email: string;
  password: string;
};

export type FirebaseErrorType = {
  error: FirebaseError;
  message: string;
};
