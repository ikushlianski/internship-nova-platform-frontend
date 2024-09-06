import { createContext, ReactNode, useContext } from "react";

type ToastContextValue = {
  create: (content: ReactNode, type: "success" | "warning" | "error") => void;
  remove: (id: number) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => useContext(ToastContext);
