import { useEffect, useState } from 'react';
import {
  TYPEWRITER_INITIAL_DELAY_MS,
  TYPEWRITER_MIN_DELAY_MS,
  TYPEWRITER_MAX_DELAY_MS,
} from '../constants';

/**
 * Progressively reveals `text` one character at a time with randomised delay,
 * simulating a typewriter effect.
 *
 * Single Responsibility: only manages character-reveal state.
 *
 * @param {string} text - The full string to type out.
 * @returns {string} The portion of `text` revealed so far.
 */
const useTypeWriter = (text) => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex > text.length) return;

    const delay =
      charIndex === 0
        ? TYPEWRITER_INITIAL_DELAY_MS
        : Math.random() * (TYPEWRITER_MAX_DELAY_MS - TYPEWRITER_MIN_DELAY_MS + 1) +
          TYPEWRITER_MIN_DELAY_MS;

    const timeout = setTimeout(() => {
      setDisplayText(text.substring(0, charIndex));
      setCharIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, text]);

  return displayText;
};

export default useTypeWriter;
