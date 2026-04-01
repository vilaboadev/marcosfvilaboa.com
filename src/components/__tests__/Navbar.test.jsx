import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../Navbar';

// Top-level mock – always return false (no shrink) for most tests
vi.mock('../../hooks/useScrollShrink', () => ({ default: () => false }));

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText(/marcosfvilaboa/i)).toBeInTheDocument();
  });

  it('renders all navigation links from constants', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('does NOT add the shrink class by default', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('nav').className).not.toContain('shrink');
  });

  it('toggles the mobile menu when the burger button is clicked', () => {
    render(<Navbar />);
    const menuBtn = screen.getByRole('button');
    const mainMenu = document.getElementById('mainMenu');

    expect(mainMenu.className).not.toContain('in');
    fireEvent.click(menuBtn);
    expect(mainMenu.className).toContain('in');
    fireEvent.click(menuBtn);
    expect(mainMenu.className).not.toContain('in');
  });

  it('renders the language selector', () => {
    render(<Navbar />);
    expect(screen.getByText(/Language/i)).toBeInTheDocument();
  });
});
