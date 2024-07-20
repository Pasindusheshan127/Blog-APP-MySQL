const Menu = () => {
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
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((p) => (
        <div className="post" key={p.id}>
          <img src={p.img} alt="" />
          <h2>{p.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
