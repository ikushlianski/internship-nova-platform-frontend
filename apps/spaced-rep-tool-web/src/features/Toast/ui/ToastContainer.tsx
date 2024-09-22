import React, { useEffect, useState } from 'react';
import Toast from './Toast';
import { IToast } from 'src/types/Toast';
import { setToastFunction } from 'src/features/Toast/logic/ShowToast';

const ToastContainer: React.FC = () => {
  const [toast, setToast] = useState<IToast | null>(null);

  useEffect(() => {
    setToastFunction((newToast: IToast | null) => setToast(newToast));
  }, []);

  const removeToast = () => {
    setToast(null);
  };

  return (
    <div className="fixed bottom-5 right-5 z-20">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => removeToast()} />}
    </div>
  );
};

export default ToastContainer;
