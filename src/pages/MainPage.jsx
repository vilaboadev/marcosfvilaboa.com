import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import HomeCard from '../components/HomeCard';
import { STAGGER_CONTAINER } from '../constants';
import { HOME_CARDS } from '../constants/homeCards';

const SECTION_PROPS = {
  style: { minHeight: '100vh', padding: '4rem 2rem' },
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

/**
 * Main content page containing the home grid, about-me, and contact sections.
 * Rendering data (HOME_CARDS) is decoupled from this component (DIP).
 */
const MainPage = () => (
  <>
    <SEO
      title="About Me | Marcos F. Vilaboa"
      description="Personal website of Marcos F. Vilaboa – IT engineer, web developer, and technology enthusiast."
    />
    <Navbar />

    {/* Home grid */}
    <motion.div
      id="home"
      className="row"
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {HOME_CARDS.map((card) => (
        <HomeCard key={card.id} {...card} />
      ))}
    </motion.div>

    {/* About Me */}
    <motion.div id="aboutMe" {...SECTION_PROPS}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Me</h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>Content coming soon...</p>
    </motion.div>

    {/* Contact */}
    <motion.div id="contact" {...SECTION_PROPS}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact</h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>Content coming soon...</p>
    </motion.div>
  </>
);

export default MainPage;
