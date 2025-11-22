import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypeWriter from '../components/TypeWriter';
import SEO from '../components/SEO';

const StartPage = () => {
  return (
    <>
      <SEO
        title="Welcome | Marcos F. Vilaboa"
        description="Almost IT engineer. Geek or nerd (both fit). Always learning and trying to improve myself."
      />
      <motion.div
        className="container"
        id="startPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          id="typer"
          className="col-sm-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <TypeWriter text="{ marcosfvilaboa }" />
        </motion.h1>
        <motion.p
          className="col-sm-12 fadeInUpText"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          "Almost IT engineer. Geek or nerd (both fit).
          <br />
          Always learning and trying to improve myself."
        </motion.p>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link to="/main" className="btn btn-primary btn-lg bounceInLeftButton" role="button">
            KNOW ME &gt;&gt;
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default StartPage;
