import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non.",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non.",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non.",
      img: "https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
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
