import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { CustomModalPropType } from './types';

function CustomModal({ children, isOpen, onClose }: CustomModalPropType) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxWidth: '80rem',
      height: 'auto',
      maxHeight: '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    closeButton: {
      position: 'absolute' as const,
      top: '0.5rem',
      right: '0.5rem',
      background: 'none',
      border: 'none',
      color: '#000',
      cursor: 'pointer',
    },
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  // Adjust the width and height based on screen sizes
  if (isMobile) {
    customStyles.content.width = '90%';
    customStyles.content.height = '40rem';
  } else if (isTablet) {
    customStyles.content.width = '60rem';
    customStyles.content.height = '40rem';
  } else {
    customStyles.content.width = '80rem';
    customStyles.content.height = '40rem';
  }

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={onClose} type="button" style={customStyles.closeButton}>
        close
      </button>
      {children}
    </Modal>
  );
}

export default CustomModal;
