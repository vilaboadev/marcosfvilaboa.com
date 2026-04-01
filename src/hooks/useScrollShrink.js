import { useEffect, useState } from 'react';
import { SCROLL_SHRINK_THRESHOLD } from '../constants';

/**
 * Returns `true` when the window has been scrolled past
 * SCROLL_SHRINK_THRESHOLD pixels.
 *
 * Single Responsibility: only tracks scroll position.
 */
const useScrollShrink = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > SCROLL_SHRINK_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isShrunk;
};

export default useScrollShrink;
