import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastPropTypes } from './types';

const notify = (text: string) =>
  toast(`${text}`, {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
function Toast({ text, visible, setVisible }: ToastPropTypes) {
  const onClose = () => {
    toast.dismiss();
    setVisible({
      text: '',
      visible: false,
    });
  };
  useEffect(() => {
    if (visible) {
      notify(text);
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
    return () => {};
  }, [text, visible]);
  return (
    <ToastContainer
      position="top-right"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default Toast;
