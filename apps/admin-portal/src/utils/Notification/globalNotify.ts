let notificationSetter:
  | ((
      message: string,
      options: { type: 'success' | 'error' | 'info' | 'warning'; autoHideDuration?: number },
    ) => void)
  | null = null;

export const setNotificationFunction = (fn: typeof notificationSetter) => {
  notificationSetter = fn;
};

export const showNotify = (
  message: string,
  options: { type: 'success' | 'error' | 'warning' | 'info'; autoHideDuration?: number },
) => {
  if (notificationSetter) {
    notificationSetter(message, options);
  } else {
    console.warn('Notify function is not initialized');
  }
};
