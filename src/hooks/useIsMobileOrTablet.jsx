import { useState, useEffect } from 'react';

export function useIsMobileOrTablet() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileOrTablet(window.innerWidth <= 767);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Sprawdź szerokość na początku

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileOrTablet;
}
