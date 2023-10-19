// * Base
import { useCallback, useDebugValue, useEffect, useState } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  useDebugValue(isOnline ? 'Online' : 'Offline');

  const setOnlineStatus = useCallback(() => setIsOnline(true), []);
  const setOfflineStatus = useCallback(() => setIsOnline(false), []);

  useEffect(() => {
    window.addEventListener('online', setOnlineStatus);
    window.addEventListener('offline', setOfflineStatus);

    return () => {
      window.removeEventListener('online', setOnlineStatus);
      window.removeEventListener('offline', setOfflineStatus);
    };
  }, [setOnlineStatus, setOfflineStatus]);
}

export default useOnlineStatus;
