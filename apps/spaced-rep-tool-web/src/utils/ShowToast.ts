import { IToast } from 'src/types/Toast';

let toastSetter: ((toast: IToast | null) => void) | null = null;

export const setToastFunction = (fn: (toast: IToast | null) => void) => {
  toastSetter = fn;
};

export const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
  if (toastSetter) {
    toastSetter({
      message,
      type,
      onClose: () => {
        toastSetter?.(null);
      },
    });
    setTimeout(() => toastSetter?.(null), 3000);
  } else {
    console.warn('setToastFunction not initialized.');
  }
};
