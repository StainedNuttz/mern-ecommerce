import { useState } from 'react';

export const useAlert = (timer) => {
  timer = timer * 1000;
  const [alert, setAlert] = useState(false);

  const hideAlert = () => setAlert(false);

  let alertTimer;
  const showAlert = () => {
    setAlert(true);
    alertTimer = setTimeout(hideAlert, timer);
  }

  const cancelTimer = () => {
    if (alertTimer) {
      clearTimeout(alertTimer);
    }
  }
  
  return [alert, cancelTimer, showAlert, hideAlert];
}