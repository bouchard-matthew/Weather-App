import { useState, useEffect } from 'react';

export const useClientGate = (): boolean => {
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  return isClientReady;
};

export default useClientGate;
