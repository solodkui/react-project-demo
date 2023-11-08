// * Base
import { useCallback, useEffect } from 'react';

function useBeforeUnload(callback?: () => void) {
  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      callback && callback();
    },
    [callback],
  );

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [handleBeforeUnload]);
}

export default useBeforeUnload;
