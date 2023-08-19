export type AdminLoginFormTypes = {
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  showToast: {
    visible: boolean;
    text: string;
  };
  setShowToast: React.Dispatch<
    React.SetStateAction<{ text: string; visible: boolean }>
  >;
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
};

export type FormDataType = {
  email: string;
  password: string;
};
