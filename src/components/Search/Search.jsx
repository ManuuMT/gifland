import React, { useState } from "react";
import "./Search.scss";
import Gif from "../Gif/Gif";
import getGifs from "../../services/getGifs";

const Search = () => {
  // Hooks
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  // Methods
  const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    callAPI(input);
    setInput("");
  };

  async function callAPI(keyword) {
    setArray([]);
    setTimeout(() => {
      console.log("Loading new gifs...");
    }, 1000);
    const gifs = await getGifs(keyword);
    setArray(gifs);
  }

  const showGifs = () => {
    return array.map((singleGif, i) => <Gif source={singleGif} imgKey={i} />);
  };

  return (
    <>
      <div className="container search text-center">
        <form onSubmit={handleSubmit} className="my-3">
          <input
            onChange={handleChange}
            type="text"
            className="search-input"
            value={input}
            placeholder="Search something funny"
          ></input>
        </form>
        {array === [] ? "Nothing to show yet..." : showGifs()}
      </div>
    </>
  );
};

export default Search;
