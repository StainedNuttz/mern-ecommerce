import { useState } from 'react';

export const useAlert = (timer) => {
  timer = timer * 1000;
  const [alertAlive, setAlertAlive] = useState(false);

  const hideAlert = () => setAlertAlive(false);
  const showAlert = () => {
    if (alertAlive) return;
    setAlertAlive(true);
    setTimeout(hideAlert, timer);
  }
  
  return [alertAlive, showAlert, hideAlert];
}