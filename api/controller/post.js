import { db } from "../db.js";
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q = "SELECT * FROM posts WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  const q =
    "INSERT INTO posts(`title`, `desc`, `img`, `username`, `categories`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.username,
    req.body.categories,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json("Post added successfully");
  });
};

export const deletePost = (req, res) => {
  const q = "DELETE FROM posts WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post deleted successfully");
  });
};

export const updatePost = (req, res) => {
  const q =
    "UPDATE posts SET `title` = ?, `desc` = ?, `img` = ?, `categories` = ? WHERE `id` = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.categories,
    req.params.id,
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post updated successfully");
  });
};
