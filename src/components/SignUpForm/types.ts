export type SignUpPropType = {
  signUpModal: boolean;
  setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
  onLoginClick: () => void;
};

export type FormDataType = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type InputValue = string;
