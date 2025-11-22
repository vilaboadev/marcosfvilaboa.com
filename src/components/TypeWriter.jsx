import { useEffect, useState } from 'react';

const TypeWriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, charIndex === 0 ? 1200 : Math.random() * (300 - 60 + 1) + 60);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, text]);

  return <span>{displayText}</span>;
};

export default TypeWriter;
