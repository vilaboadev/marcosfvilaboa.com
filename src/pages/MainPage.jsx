import Navbar from '../components/Navbar';

const MainPage = () => {
  return (
    <>
      <Navbar />
      {/* Home */}
      <div id="home" className="row">
        <div className="col-sm-4" id="homeAbout">
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
        </div>
        <div className="col-sm-4" id="homeContact">
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
        </div>
        <div className="col-sm-4" id="homeBlog">
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
        </div>
      </div>
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
