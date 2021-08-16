import { useState } from 'react';

export const useRefresh = () => {
  const [s, setS] = useState(0);
  return () => setS(v => v + 1);
}
