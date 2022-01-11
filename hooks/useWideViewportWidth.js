import { useState, useEffect } from 'react';

const useWideViewportWidth = (minWidth = 1400) => {
  const [isWide, setIsWide] = useState(false);

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setIsWide(window.innerWidth >= minWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isWide;
};

export default useWideViewportWidth;
