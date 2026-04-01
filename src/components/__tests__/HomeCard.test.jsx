import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomeCard from '../HomeCard';

vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, tag) => {
        const Tag = tag;
        // Strip framer-motion-specific props before forwarding to the DOM element
        return ({
          children,
          variants: _variants,
          initial: _initial,
          animate: _animate,
          whileInView: _whileInView,
          viewport: _viewport,
          transition: _transition,
          ...rest
        }) => <Tag {...rest}>{children}</Tag>;
      },
    },
  ),
}));

const defaultProps = {
  id: 'homeAbout',
  imageSrc: '/img.jpg',
  imageAlt: 'Test image',
  imageClass: 'testClass',
  heading: 'TEST HEADING',
  bodyText: 'Test body text.',
  linkHref: '#test',
  linkClass: 'testBtn',
  linkLabel: 'TEST >>',
};

describe('HomeCard', () => {
  it('renders the heading', () => {
    render(<HomeCard {...defaultProps} />);
    expect(screen.getByText('TEST HEADING')).toBeInTheDocument();
  });

  it('renders the body text', () => {
    render(<HomeCard {...defaultProps} />);
    expect(screen.getByText('Test body text.')).toBeInTheDocument();
  });

  it('renders the CTA link with the correct href', () => {
    render(<HomeCard {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'TEST >>' })).toHaveAttribute('href', '#test');
  });

  it('renders the image with the correct alt text', () => {
    render(<HomeCard {...defaultProps} />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('hides the image on error', () => {
    render(<HomeCard {...defaultProps} />);
    const img = screen.getByAltText('Test image');
    fireEvent.error(img);
    expect(img.style.display).toBe('none');
  });
});
