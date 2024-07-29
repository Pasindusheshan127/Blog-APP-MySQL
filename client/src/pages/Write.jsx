import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const quillRef = useRef(null);

  const upload = async () => {
    if (!file) return "";
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8800/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      if (state) {
        await axios.put(`http://localhost:8800/api/post/${state.id}`, {
          title,
          desc: value,
          cat,
          img: imgUrl,
        });
      } else {
        await axios.post("http://localhost:8800/api/post/", {
          title,
          desc: value,
          cat,
          img: imgUrl,
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            ref={quillRef}
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {["art", "science", "technology", "cinema", "design", "food"].map(
            (cat) => (
              <div className="cat" key={cat}>
                <input
                  type="radio"
                  checked={cat === cat}
                  name="cat"
                  value={cat}
                  id={cat}
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Write;
