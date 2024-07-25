import { useContext } from "react";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navBar">
      <div className="container">
        <Link className="logo" to="/">
          <img className="logo" src={logo} />
        </Link>
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
          <span>{currentUser && currentUser.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="links" to="/login">
              {" "}
              Login
            </Link>
          )}
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
