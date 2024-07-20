import Menu from "../components/Menu";
import Delete from "../img/delete.png";
import Eddit from "../img/edit.png";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="info">
            <span className="user-name">John Doe</span>
            <span className="date">1 hour ago</span>
          </div>
          <div className="edit">
            <Link to={"/write/?edit=2"} style={{ textDecoration: "none" }}>
              <img src={Eddit} alt="" />
            </Link>
            <Link to={"/write/?edit=2"} style={{ textDecoration: "none" }}>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1 className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          voluptate.
        </h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptates, aspernatur quibusdam, quidem eum quod voluptate
          necessitatibus quisquam quae, autem quas. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, perspiciatis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorem voluptates,
          aspernatur quibusdam, quidem eum quod voluptate necessitatibus
          quisquam quae, autem quas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti, perspiciatis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem voluptates, aspernatur
          quibusdam, quidem eum quod voluptate necessitatibus quisquam quae,
          autem quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti, perspiciatis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorem voluptates, aspernatur quibusdam, quidem eum
          quod voluptate necessitatibus quisquam quae, autem quas. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Corrupti, perspiciatis.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptates, aspernatur quibusdam, quidem eum quod voluptate
          necessitatibus quisquam quae, autem quas.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptates, aspernatur quibusdam, quidem eum quod voluptate
          necessitatibus quisquam quae, autem quas.
          <br />
          <br />
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
