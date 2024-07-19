import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="container">
        <img className="logo" src={logo} />
        <div className="links">
          <Link className="links" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="links" to="/?cat=art">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="links" to="/?cat=art">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="links" to="/?cat=art">
            <h6>CINEMA</h6>
          </Link>
          <Link className="links" to="/?cat=art">
            <h6>DESIGN</h6>
          </Link>
          <Link className="links" to="/?cat=art">
            <h6>FOOD</h6>
          </Link>
          <span>John Doe</span>
          <span>Logout</span>
          <span className="write">
            <Link className="links" to="/write">
              write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
