import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import { Button } from "../index";

import "./movie-card.scss";

const MovieCard = ({ category: cat, item }) => {
  const link = `/${category[cat]}/${item.id}`;

  const backgroundImage = apiConfig.w500Image(
    item.poster_path || item.backdrop_path
  );

  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
