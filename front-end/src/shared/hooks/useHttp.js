import { useState, useCallback, useRef, useEffect } from 'react';

const URL = 'http://192.168.1.128:5000';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const currentHttpRequests = useRef([]);

  const sendRequest = useCallback(async (endpoint, method = 'GET', body = null, headers = {}) => {
    setError(null);
    setIsLoading(true);

    const abortController = new AbortController();
    currentHttpRequests.current.push(abortController);

    try {
      const response = await fetch(URL + endpoint, {
        method,
        body,
        headers,
        signal: abortController.signal
      });

      const responseData = await response.json();

      currentHttpRequests.current = currentHttpRequests.current.filter(req => req !== abortController);
  
      if (response.ok) {
        setIsLoading(false);
        return responseData;
      } else {
        throw new Error(responseData.message);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      throw err;
    }

  }, []);

  useEffect(() => {
    // cleanup when component unmounts
    return () => {
      currentHttpRequests.current.forEach(h => h.abort());
    }
  }, [])

  return [isLoading, error, sendRequest];
}