import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import StartPage from '../StartPage';

vi.mock('../../hooks/useTypeWriter', () => ({ default: (text) => text }));

vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, tag) => {
        const Tag = tag;
        return ({ children, initial: _i, animate: _a, transition: _t, ...rest }) =>
          <Tag {...rest}>{children}</Tag>;
      },
    },
  ),
}));

const renderStartPage = () =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>
    </HelmetProvider>,
  );

describe('StartPage', () => {
  it('renders the typewriter text', () => {
    renderStartPage();
    expect(screen.getByText('{ marcosfvilaboa }')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    renderStartPage();
    expect(screen.getByText(/Almost IT engineer/i)).toBeInTheDocument();
  });

  it('renders the "KNOW ME" call-to-action link', () => {
    renderStartPage();
    expect(screen.getByRole('link', { name: /KNOW ME/i })).toBeInTheDocument();
  });

  it('links to the /main route', () => {
    renderStartPage();
    const link = screen.getByRole('link', { name: /KNOW ME/i });
    expect(link).toHaveAttribute('href', '/main');
  });
});
