import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SEO from '../SEO';
import { HelmetProvider } from 'react-helmet-async';
import { SITE } from '../../constants';

const wrapper = ({ children }) => <HelmetProvider>{children}</HelmetProvider>;

describe('SEO', () => {
  it('sets the default page title when no props are passed', async () => {
    render(<SEO />, { wrapper });
    await waitFor(() => expect(document.title).toBe(SITE.title));
  });

  it('sets a custom title when provided', async () => {
    render(<SEO title="Custom Title" />, { wrapper });
    await waitFor(() => expect(document.title).toBe('Custom Title'));
  });

  it('renders without crashing when all props are provided', () => {
    expect(() =>
      render(<SEO title="T" description="D" keywords="K" />, { wrapper }),
    ).not.toThrow();
  });
});
