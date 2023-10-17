// * Based
import { useEffect, useCallback } from 'react';
import BASE from '../helpers/base';

function useTitle({ title }: { title: string }) {
  const handleVisibilityChange = useCallback(() => {
    document.title = `${BASE.projectName}: ${document.hidden ? BASE.titleHidden : title}`;
  }, [title]);

  useEffect(() => {
    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [title, handleVisibilityChange]);

  return title;
}

export default useTitle;
