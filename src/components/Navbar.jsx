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
 * Uses a <button> (not <a>) for the trigger so it is keyboard-accessible
 * and semantically correct (no href navigation side-effect).
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
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-controls="language-menu-list"
    >
      🌐<span> Language</span>
    </button>
    <ul
      id="language-menu-list"
      role="listbox"
      className={`dropdown-menu${isOpen ? ' show' : ''}`}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      {LANGUAGES.map((lang) => (
        <li
          key={lang}
          role="option"
          aria-selected={selected === lang}
          className={selected === lang ? 'selected' : ''}
        >
          <a
            href="#"
            className="dropdown-item"
            onClick={(e) => {
              e.preventDefault();
              onSelect(lang);
            }}
          >
            {lang}
          </a>
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
    if (!sectionId) {
      e.preventDefault();
      return;
    }
    scrollToSection(sectionId);
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
