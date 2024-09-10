import { ReactNode, useMemo, useState } from "react";
import { MailCheck, X, CircleAlert, CircleX } from "lucide-react";
import { ToastContext } from "./ToastContext";

export interface ToastProps {
  children: ReactNode;
  type: "success" | "warning" | "error";
  close: () => void;
}

export default function Toast({ children, type, close }: ToastProps) {
  const iconMap = {
    success: <MailCheck color="green" size={40} />,
    warning: <CircleX color="red" fontSize="inherit" size={40} />,
    error: <CircleAlert color="orange" fontSize="inherit" size={40} />,
  };

  const toastIcon = iconMap[type] || null;
  return (
    <div role="alert" className="relative">
      <div className="flex items-center justify-between p-4 w-80 border border-gray shadow-md rounded-lg my-3 animation-semicircle">
        {toastIcon && <div className="text-6xl mr-5">{toastIcon}</div>}
        <div className="text-wrap text-center w-full">{children}</div>
      </div>
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => close()}
      >
        <X color="black" />
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
    const toastId = Date.now();
    const newToast: ToastType = {
      id: toastId,
      content: content,
      type: type,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
    setTimeout(() => {
      remove(toastId);
    }, 10000);
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
