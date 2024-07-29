import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  console.log(cat);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/post${cat}`);
        setPosts(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((p) => (
          <div className="post" key={p.id}>
            <div className="image">
              <img src={p.img} alt="" />
            </div>
            <div className="content">
              <Link className="links" to={`/post/${p.id}`}>
                <h1>{p.title}</h1>
              </Link>
              <p>{p.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
