import useTypeWriter from '../hooks/useTypeWriter';

/**
 * Renders `text` one character at a time using the useTypeWriter hook.
 * Presentation-only component (SRP).
 */
const TypeWriter = ({ text }) => {
  const displayText = useTypeWriter(text);
  return <span>{displayText}</span>;
};

export default TypeWriter;
