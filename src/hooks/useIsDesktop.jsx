import { useState, useEffect } from 'react';

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Sprawdź szerokość na początku

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
}
