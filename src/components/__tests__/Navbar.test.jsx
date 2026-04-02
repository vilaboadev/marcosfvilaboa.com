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

  it('uses Bootstrap 5 "show" class (not BS3 "in") to expand the menu', () => {
    render(<Navbar />);
    // Use the accessible name to distinguish from the language-toggle button
    const toggleBtn = screen.getByRole('button', { name: /toggle navigation/i });
    const mainMenu = document.getElementById('mainMenu');

    expect(mainMenu.className).not.toContain('show');
    fireEvent.click(toggleBtn);
    expect(mainMenu.className).toContain('show');
    fireEvent.click(toggleBtn);
    expect(mainMenu.className).not.toContain('show');
  });

  it('renders the language selector', () => {
    render(<Navbar />);
    expect(screen.getByText(/Language/i)).toBeInTheDocument();
  });

  it('language toggle is a <button> (not an anchor) for proper semantics', () => {
    render(<Navbar />);
    const languageBtn = screen.getByRole('button', { name: /language/i });
    expect(languageBtn.tagName).toBe('BUTTON');
  });

  it('language menu uses role="menu" / role="menuitem" (not listbox/option)', () => {
    render(<Navbar />);
    const trigger = screen.getByRole('button', { name: /language/i });
    // Open the menu
    fireEvent.click(trigger);
    // Items must be buttons with role="menuitem" (no nested anchors)
    const items = screen.getAllByRole('menuitem');
    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => expect(item.tagName).toBe('BUTTON'));
  });

  it('uses Bootstrap 5 fixed-top class instead of BS3 navbar-fixed-top', () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector('nav');
    expect(nav.className).toContain('fixed-top');
    expect(nav.className).not.toContain('navbar-fixed-top');
  });
});
