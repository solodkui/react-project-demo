// * Base
import { useCallback, useDebugValue, useEffect, useState } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState<boolean>(true),
    setOnlineStatus = useCallback(() => setIsOnline(true), []),
    setOfflineStatus = useCallback(() => setIsOnline(false), []);

  useDebugValue(isOnline ? 'Online' : 'Offline');

  useEffect(() => {
    window.addEventListener('online', setOnlineStatus);
    window.addEventListener('offline', setOfflineStatus);

    return () => {
      window.removeEventListener('online', setOnlineStatus);
      window.removeEventListener('offline', setOfflineStatus);
    };
  }, [setOnlineStatus, setOfflineStatus]);

  return isOnline;
}

export default useOnlineStatus;
