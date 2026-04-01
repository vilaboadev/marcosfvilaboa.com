import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TypeWriter from '../TypeWriter';

// Top-level mock – returns text unchanged so tests are deterministic
vi.mock('../../hooks/useTypeWriter', () => ({ default: (text) => text }));

describe('TypeWriter', () => {
  it('renders the text returned by the hook', () => {
    render(<TypeWriter text="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders inside a <span>', () => {
    const { container } = render(<TypeWriter text="test" />);
    expect(container.firstChild.tagName).toBe('SPAN');
  });

  it('renders an empty span when text is empty', () => {
    const { container } = render(<TypeWriter text="" />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
