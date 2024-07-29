import axios from "axios";
import Menu from "../components/Menu";
import Delete from "../img/delete.png";
import Eddit from "../img/edit.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
const { AuthContext } = require("../context/authContext");

const Single = () => {
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/post/${postId}`);
        setPost(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/post/${postId}`);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post?.img} alt="" />}
          <div className="info">
            <span className="user-name">{post?.username}</span>
            <span className="date">posted {moment(post.date).fromNow()}</span>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={"/write/?edit=2"} style={{ textDecoration: "none" }}>
                <img src={Eddit} alt="" />
              </Link>
              <Link to={"/write/?edit=2"} style={{ textDecoration: "none" }}>
                <img onClick={handleDelete} src={Delete} alt="" />
              </Link>
            </div>
          )}
        </div>
        <h1 className="title">{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
