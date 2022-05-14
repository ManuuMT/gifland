import React, { useState } from "react";
import "./Search.scss";
import Gif from "../Gif/Gif";
import getGifs from "../../services/getGifs";
const Search = () => {
  const [input, setInput] = useState("");

  const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setInput("");
  };

  return (
    <>
      <div className="container search">
        <form onSubmit={handleSubmit} className="my-3">
          <input
            onChange={handleChange}
            type="text"
            className="search-input"
            value={input}
            placeholder="Search something funny..."
          ></input>
        </form>
      </div>

      <Gif />
    </>
  );
};

export default Search;
