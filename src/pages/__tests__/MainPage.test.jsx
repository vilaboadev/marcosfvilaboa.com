import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../MainPage';
import { HOME_CARDS } from '../../constants/homeCards';

vi.mock('../../hooks/useScrollShrink', () => ({ default: () => false }));

vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, tag) => {
        const Tag = tag;
        return ({
          children,
          variants: _v,
          initial: _i,
          animate: _a,
          whileInView: _w,
          viewport: _vp,
          transition: _t,
          ...rest
        }) => <Tag {...rest}>{children}</Tag>;
      },
    },
  ),
}));

const renderMainPage = () =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </HelmetProvider>,
  );

describe('MainPage', () => {
  it('renders the navbar brand', () => {
    renderMainPage();
    expect(screen.getByText(/marcosfvilaboa/i)).toBeInTheDocument();
  });

  it('renders all home cards from constants', () => {
    renderMainPage();
    HOME_CARDS.forEach(({ heading }) => {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
    });
  });

  it('renders the About Me section heading', () => {
    renderMainPage();
    expect(screen.getByRole('heading', { name: /^About Me$/i, level: 2 })).toBeInTheDocument();
  });

  it('renders the Contact section heading', () => {
    renderMainPage();
    expect(screen.getByRole('heading', { name: /^Contact$/i, level: 2 })).toBeInTheDocument();
  });
});
