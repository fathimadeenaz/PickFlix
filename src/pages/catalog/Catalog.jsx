import { useParams } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";

import { category } from "../../api/tmdbApi";

import MovieGrid from "../../components/movie-grid/MovieGrid";

import "./catalog.scss";

const Catalog = () => {
  const { category: cat } = useParams();

  return (
    <>
      <div className="catalog-header" style={{ backgroundImage: `url(${bg})` }}>
        <h2>{cat === category.movie ? "Movies" : "TV"}</h2>
      </div>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={cat} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
