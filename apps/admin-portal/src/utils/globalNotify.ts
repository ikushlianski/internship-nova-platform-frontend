import { NotificationOptions, NotificationType } from 'react-admin';

let notificationSetter:
  | ((
      message: string,
      options: NotificationOptions & { type?: NotificationType; autoHideDuration?: number },
    ) => void)
  | null = null;

export const setNotificationFunction = (fn: typeof notificationSetter) => {
  notificationSetter = fn;
};

export const showNotify = (
  message: string,
  options: NotificationOptions & { type?: NotificationType; autoHideDuration?: number },
) => {
  if (notificationSetter) {
    notificationSetter(message, { ...options, type: options.type || 'info' });
  } else {
    console.warn('Notify function is not initialized');
  }
};
