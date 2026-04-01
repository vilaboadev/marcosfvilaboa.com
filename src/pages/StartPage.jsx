import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypeWriter from '../components/TypeWriter';
import SEO from '../components/SEO';
import { FADE_IN, SLIDE_DOWN, SLIDE_UP, SLIDE_RIGHT } from '../constants';

const TAGLINE =
  '"Almost IT engineer. Geek or nerd (both fit).\nAlways learning and trying to improve myself."';

/**
 * Landing / splash page.
 * Presentation-only – all animation config lives in constants (DIP / DRY).
 */
const StartPage = () => (
  <>
    <SEO
      title="Welcome | Marcos F. Vilaboa"
      description="Almost IT engineer. Geek or nerd (both fit). Always learning and trying to improve myself."
    />
    <motion.div className="container" id="startPage" {...FADE_IN}>
      <motion.h1 id="typer" className="col-sm-12" {...SLIDE_DOWN}>
        <TypeWriter text="{ marcosfvilaboa }" />
      </motion.h1>
      <motion.p className="col-sm-12 fadeInUpText" {...SLIDE_UP}>
        {TAGLINE.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < TAGLINE.split('\n').length - 1 && <br />}
          </span>
        ))}
      </motion.p>
      <motion.div {...SLIDE_RIGHT}>
        <Link
          to="/main"
          className="btn btn-primary btn-lg bounceInLeftButton"
          role="button"
        >
          KNOW ME &gt;&gt;
        </Link>
      </motion.div>
    </motion.div>
  </>
);

export default StartPage;
