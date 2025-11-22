import { useEffect, useState } from 'react';

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  return (
    <nav className={`navbar navbar-custom navbar-fixed-top slideInDownNav ${shrink ? 'shrink' : ''}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            id="menu"
            className={`navbar-toggle btn-md ${menuOpen ? 'change-color' : ''}`}
            onClick={toggleMenu}
          >
            <i className={`glyphicon glyphicon-chevron-${menuOpen ? 'up' : 'down'}`}></i>
          </button>
          <a className="navbar-brand" href="#">
            {'{ marcosfvilaboa }'}
          </a>
        </div>
        <div className={`collapse navbar-collapse ${menuOpen ? 'in' : ''}`} id="mainMenu">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" onClick={() => scrollToSection('home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#aboutMe" onClick={() => scrollToSection('aboutMe')}>
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection('contact')}>
                Contact
              </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li className={`dropdown ${languageMenuOpen ? 'change-color' : ''}`} id="language-menu">
              <a className="dropdown-toggle" onClick={toggleLanguageMenu} href="#">
                <i className="glyphicon glyphicon-globe"></i>
                <span> Language</span>
              </a>
              <ul className={`dropdown-menu ${languageMenuOpen ? 'show' : ''}`} style={{ display: languageMenuOpen ? 'block' : 'none' }}>
                <li className={selectedLanguage === 'English' ? 'selected' : ''}>
                  <a href="#" onClick={() => setSelectedLanguage('English')}>
                    English
                  </a>
                </li>
                <li className={selectedLanguage === 'Spanish' ? 'selected' : ''}>
                  <a href="#" onClick={() => setSelectedLanguage('Spanish')}>
                    Spanish
                  </a>
                </li>
                <li className={selectedLanguage === 'Catalan' ? 'selected' : ''}>
                  <a href="#" onClick={() => setSelectedLanguage('Catalan')}>
                    Catalan
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
