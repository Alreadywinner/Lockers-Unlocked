export type LoginPropType = {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSignUpClick: () => void;
};

export type FormDataType = {
  email: string;
  password: string;
};
