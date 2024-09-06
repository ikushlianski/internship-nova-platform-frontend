import React, { ReactNode, useMemo, useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContext } from "./ToastContext";

interface ToastProps {
  children: ReactNode;
  type: "success" | "warning" | "error";
  close: () => void;
}

export default function Toast({ children, type, close }: ToastProps) {
  const iconMap = {
    success: <CheckCircleIcon color="success" fontSize="inherit" />,
    warning: <ErrorIcon color="warning" fontSize="inherit" />,
    error: <DangerousIcon color="error" fontSize="inherit" />,
  };

  const toastIcon = iconMap[type] || null;
  return (
    <div role="alert" className="relative">
      <div className="flex items-center justify-between p-4 w-80 border border-gray shadow-md rounded-lg my-3">
        {toastIcon && <div className="text-6xl mr-5">{toastIcon}</div>}
        <div className="text-wrap text-center w-full">{children}</div>
      </div>
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => close()}
      >
        <CloseIcon color="action" />
      </div>
    </div>
  );
}

type ToastProviderProps = {
  children: React.ReactElement;
};

type ToastType = {
  id: number;
  content: ReactNode;
  type: "success" | "warning" | "error";
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function create(content: ReactNode, type: "success" | "warning" | "error") {
    const newToast: ToastType = {
      id: Date.now(),
      content: content,
      type: type,
    };
    console.log(toasts);
    setToasts((previousToasts) => [...previousToasts, newToast]);
  }

  function remove(id: number) {
    setToasts((previousToasts) =>
      previousToasts.filter((toast) => toast.id !== id),
    );
  }
  const contextValue = useMemo(
    () => ({
      create: create,
      remove: remove,
    }),
    [],
  );
  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className="absolute bottom-5 right-10">
          {toasts &&
            toasts.map((toast: ToastType, index: number) => (
              <Toast
                type={toast.type}
                close={() => remove(toast.id)}
                key={index}
              >
                {toast.content}
              </Toast>
            ))}
        </div>
      </ToastContext.Provider>
    </>
  );
}
