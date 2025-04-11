'use client';
import { useEffect } from 'react';
import Modal from 'react-modal';

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Check if the element exists before setting it
    const appElement = document.getElementById('__next');
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      console.warn('#__next element not found. Modal setup delayed.');
    }
  }, []);

  return <>{children}</>;
};

export default ModalProvider;