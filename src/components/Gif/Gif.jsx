import React, { useState } from "react";
import "./Gif.scss";
import PropTypes from "prop-types";

const Gif = (props) => {
  const [gifData, setGifData] = useState([]);
  // View builder
  return (
    <img
      className="gif mx-2 my-2"
      src={props.source}
      alt="gif"
      key={props.imgKey}
    ></img>
  );
};

Gif.propTypes = {
  source: PropTypes.string,
  imgKey: PropTypes.number,
};

export default Gif;
