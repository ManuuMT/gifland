import React, { useState, useEffect } from "react";
import getGifs from "../../services/getGifs";
import "./Gif.scss";
//import PropTypes from "prop-types";

const Gif = () => {
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    //console.log(props.keyword);
    //setGifKey(props.keyword);

    getGifs().then((gifs) => setGifData(gifs));
  }, []);

  // View builder
  return (
    <div className="container">
      <div className="gif-search mt-5">
        {gifData.map((singleGif, i) => (
          <img
            className="gif mx-2 my-2"
            src={singleGif}
            alt="gif"
            key={i}
          ></img>
        ))}
      </div>
    </div>
  );
};
/*
Gif.propTypes = {
  key: PropTypes.string,
};
*/

export default Gif;
