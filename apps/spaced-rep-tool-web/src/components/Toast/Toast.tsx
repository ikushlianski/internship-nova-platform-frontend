import React, { useEffect } from 'react';
import { IToast } from '../../types/Toast';
import { toastClasses } from '../../utils/ToastClasses';

const Toast: React.FC<IToast> = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div className={`fixed bottom-5 right-5 p-3 rounded-md shadow-lg z-20 ${toastClasses[type]}`}>
      {message && <span>{message}</span>}
      <button onClick={onClose} className="ml-4 text-white">
        &#x2715;
      </button>
    </div>
  );
};

export default Toast;
