import React, { useState } from "react";
import "./Search.scss";
import Gif from "../Gif/Gif";
import getGifs from "../../services/getGifs";

const Search = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState();

  async function callAPI(keyword) {
    const gifs = await getGifs(keyword);
    setTimeout(() => {
      setArray(gifs);
    }, 2000);
  }
  function showGifs() {
    return array.map((singleGif, i) => <Gif source={singleGif} imgKey={i} />);
  }

  const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    callAPI(input);
    setInput("");
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
        {array == null ? "Nothing to show yet..." : showGifs()}
      </div>
    </>
  );
};

export default Search;
