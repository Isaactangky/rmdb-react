import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";

import PropTypes from "prop-types";
const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image alt="movie-thumb" src={image} />
      </Link>
    ) : (
      <Image alt="movie-thumb" src={image} />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
