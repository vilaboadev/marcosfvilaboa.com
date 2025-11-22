import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const MainPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <SEO
        title="About Me | Marcos F. Vilaboa"
        description="Personal website of Marcos F. Vilaboa - IT engineer, web developer, and technology enthusiast."
      />
      <Navbar />
      {/* Home */}
      <motion.div
        id="home"
        className="row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="col-sm-4" id="homeAbout" variants={itemVariants}>
          <img
            src="/images/desktop.jpg"
            className="img-responsive img-circle fadeInLeftHomeImageAbout"
            alt="My desktop"
            style={{ width: '98%' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="homeText">
            <h3 className="media-heading zoomInLeftHomeTextAbout">ABOUT ME</h3>
            <p className="zoomInLeftHomeTextAbout">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#aboutMe" className="btn btn-primary btn-lg bounceInLeftHomeBtnAbout" role="button">
              ABOUT ME &gt;&gt;
            </a>
          </div>
        </motion.div>
        <motion.div className="col-sm-4" id="homeContact" variants={itemVariants}>
          <img
            src="/images/table.jpg"
            className="img-responsive img-circle fadeInDownHomeImageAbout"
            alt="My work table"
            style={{ width: '98%' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="homeText">
            <h3 className="media-heading zoomInDownHomeTextAbout">CONTACT</h3>
            <p className="zoomInDownHomeTextAbout">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg bounceInDownHomeBtnAbout" role="button">
              <span className="homeAnimBtn">CONTACT ME &gt;&gt;</span>
            </a>
          </div>
        </motion.div>
        <motion.div className="col-sm-4" id="homeBlog" variants={itemVariants}>
          <img
            src="/images/coworkers.jpg"
            className="img-responsive img-circle fadeInRightHomeImageAbout"
            alt="Co-working"
            style={{ width: '98%' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="homeText">
            <h3 className="media-heading zoomInRightHomeTextAbout">BLOG</h3>
            <p className="zoomInRightHomeTextAbout">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn btn-primary btn-lg bounceInRightHomeBtnAbout" role="button">
              BLOG &gt;&gt;
            </a>
          </div>
        </motion.div>
      </motion.div>
      {/* About Me */}
      <div id="aboutMe" style={{ minHeight: '100vh' }}>
        {Array.from({ length: 26 }, (_, i) => <br key={`aboutMe-br-${i}`} />)}
      </div>
      {/* Contact */}
      <div id="contact" style={{ minHeight: '100vh' }}>
        {Array.from({ length: 28 }, (_, i) => <br key={`contact-br-${i}`} />)}
      </div>
    </>
  );
};

export default MainPage;
