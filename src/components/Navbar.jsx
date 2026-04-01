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
 * Extracted so Navbar (SRP) does not own language-selection rendering.
 */
const LanguageMenu = ({ isOpen, selected, onToggle, onSelect }) => (
  <li
    className={`dropdown ${isOpen ? 'change-color' : ''}`}
    id="language-menu"
  >
    <a className="dropdown-toggle" onClick={onToggle} href="#">
      <i className="glyphicon glyphicon-globe" aria-hidden="true" />
      <span> Language</span>
    </a>
    <ul
      className={`dropdown-menu ${isOpen ? 'show' : ''}`}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      {LANGUAGES.map((lang) => (
        <li key={lang} className={selected === lang ? 'selected' : ''}>
          <a
            href="#"
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
 * Renders the main navigation bar.
 * Delegates scroll detection to useScrollShrink (DIP).
 * Delegates language rendering to LanguageMenu (SRP / ISP).
 */
const Navbar = () => {
  const isShrunk = useScrollShrink();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

  const handleNavLinkClick = (sectionId) => {
    if (sectionId) scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-custom navbar-fixed-top slideInDownNav ${isShrunk ? 'shrink' : ''}`}
      role="navigation"
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            id="menu"
            aria-expanded={isMenuOpen}
            aria-controls="mainMenu"
            className={`navbar-toggle btn-md ${isMenuOpen ? 'change-color' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <i
              aria-hidden="true"
              className={`glyphicon glyphicon-chevron-${isMenuOpen ? 'up' : 'down'}`}
            />
          </button>
          <a className="navbar-brand" href="#">
            {'{ marcosfvilaboa }'}
          </a>
        </div>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'in' : ''}`}
          id="mainMenu"
        >
          <ul className="nav navbar-nav navbar-right">
            {NAV_LINKS.map(({ label, sectionId }) => (
              <li key={label}>
                <a
                  href={sectionId ? `#${sectionId}` : '#'}
                  onClick={() => handleNavLinkClick(sectionId)}
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
