let toastSetter: ((toast: { message: string; type: string } | null) => void) | null = null;

export const setToastFunction = (fn: (toast: { message: string; type: string } | null) => void) => {
  toastSetter = fn;
};

export const showToast = (
  message: string,
  type: "success" | "error" | "warning" | "info",
) => {
  if (toastSetter) {
    toastSetter({ message, type });
    setTimeout(() => toastSetter?.(null), 3000); // Скрываем тост через 3 секунды
  } else {
    console.warn("setToastFunction not initialized.");
  }
};
