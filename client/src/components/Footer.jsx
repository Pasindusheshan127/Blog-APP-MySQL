import logo from "../img/logo.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <span>
        Made with ❤ and <b>ReactJS</b>
      </span>
    </div>
  );
};

export default Footer;
