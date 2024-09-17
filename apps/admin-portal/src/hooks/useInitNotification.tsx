import React, { useEffect } from 'react';
import { useNotify } from 'react-admin';
import { setNotificationFunction } from '../utils/globalNotify';

export const InitNotification: React.FC = () => {
  const notify = useNotify();

  useEffect(() => {
    setNotificationFunction((message, options) => {
      notify(message, options);
    });
  }, [notify]);
  return null;
};
