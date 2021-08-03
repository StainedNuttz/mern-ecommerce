import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const currentHttpRequests = useRef([]);

  const sendRequest = useCallback(async (endpoint, method = 'GET', body = null, headers = {}) => {
    setError(null);
    setIsLoading(true);

    const abortController = new AbortController();
    currentHttpRequests.current.push(abortController);

    if (method === 'POST' || method === 'PATCH') {
      headers = {
        ...headers,
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + endpoint, {
        method,
        headers,
        body,
        signal: abortController.signal
      });

      const responseData = await response.json();

      currentHttpRequests.current = currentHttpRequests.current.filter(req => req !== abortController);
      if (response.ok) {
        setIsLoading(false);
        setSuccess(responseData.message);
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

  return [isLoading, error, success, sendRequest];
}