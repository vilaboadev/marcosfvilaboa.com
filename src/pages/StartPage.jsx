import { Link } from 'react-router-dom';
import TypeWriter from '../components/TypeWriter';

const StartPage = () => {
  return (
    <div className="container" id="startPage">
      <h1 id="typer" className="col-sm-12">
        <TypeWriter text="{ marcosfvilaboa }" />
      </h1>
      <p className="col-sm-12 fadeInUpText">
        "Almost IT engineer. Geek or nerd (both fit).
        <br />
        Always learning and trying to improve myself."
      </p>
      <Link to="/main" className="btn btn-primary btn-lg bounceInLeftButton" role="button">
        KNOW ME &gt;&gt;
      </Link>
    </div>
  );
};

export default StartPage;
