import { useState } from 'react';
import useScrollShrink from '../hooks/useScrollShrink';
import { NAV_LINKS, LANGUAGES } from '../constants';

/**
 * Scrolls smoothly to `sectionId` in the document.
 * Pure function – no side-effects on state (SRP).
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Renders the language-picker dropdown.
 * Uses role="menu" / role="menuitem" with <button> items – the only valid
 * ARIA pattern for a dropdown that contains interactive controls.
 * (role="listbox" / role="option" forbids interactive descendants.)
 */
const LanguageMenu = ({ isOpen, selected, onToggle, onSelect }) => (
  <li
    className={`nav-item dropdown ${isOpen ? 'change-color' : ''}`}
    id="language-menu"
  >
    <button
      type="button"
      className="nav-link dropdown-toggle btn btn-link"
      onClick={onToggle}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      aria-controls="language-menu-list"
    >
      🌐<span> Language</span>
    </button>
    <ul
      id="language-menu-list"
      role="menu"
      className={`dropdown-menu${isOpen ? ' show' : ''}`}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      {LANGUAGES.map((lang) => (
        <li key={lang} role="none" className={selected === lang ? 'selected' : ''}>
          <button
            type="button"
            role="menuitem"
            className="dropdown-item"
            aria-current={selected === lang ? 'true' : undefined}
            onClick={() => onSelect(lang)}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  </li>
);

/**
 * Renders the main navigation bar using Bootstrap 5 classes.
 * Delegates scroll detection to useScrollShrink (DIP).
 * Delegates language rendering to LanguageMenu (SRP / ISP).
 */
const Navbar = () => {
  const isShrunk = useScrollShrink();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (!sectionId) {
      return;
    }
    scrollToSection(sectionId);
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white fixed-top navbar-custom slideInDownNav${isShrunk ? ' shrink' : ''}`}
      role="navigation"
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          {'{ marcosfvilaboa }'}
        </a>

        {/* Bootstrap 5 toggler (replaces BS3 navbar-toggle / glyphicons) */}
        <button
          type="button"
          id="menu"
          aria-expanded={isMenuOpen}
          aria-controls="mainMenu"
          aria-label="Toggle navigation"
          className={`navbar-toggler${isMenuOpen ? ' change-color' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* BS5 uses 'show' (not BS3 'in') to expand the collapse */}
        <div
          className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}
          id="mainMenu"
        >
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map(({ label, sectionId }) => (
              <li key={label} className="nav-item">
                <a
                  className="nav-link"
                  href={sectionId ? `#${sectionId}` : '#'}
                  onClick={(e) => handleNavLinkClick(e, sectionId)}
                >
                  {label}
                </a>
              </li>
            ))}
            <LanguageMenu
              isOpen={isLanguageMenuOpen}
              selected={selectedLanguage}
              onToggle={() => setIsLanguageMenuOpen((prev) => !prev)}
              onSelect={(lang) => {
                setSelectedLanguage(lang);
                setIsLanguageMenuOpen(false);
              }}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
