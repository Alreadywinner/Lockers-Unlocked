export type ToastPropTypes = {
  text: string;
  visible: boolean;
  setVisible: React.Dispatch<
    React.SetStateAction<{ text: string; visible: boolean }>
  >;
};
