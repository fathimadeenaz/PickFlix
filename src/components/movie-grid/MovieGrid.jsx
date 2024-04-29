import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router";

import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

import { MovieCard, Button, OutlineButton, Input } from "../index";

import "./movie-grid.scss";

const MovieGrid = ({ category: cat }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  const loadItems = async (load) => {
    let response = null;
    const params = load === "initial" ? {} : { page: page + 1 };
    if (keyword === undefined) {
      switch (cat) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      params.query = keyword;
      response = await tmdbApi.search(cat, { params });
    }

    if (load === "initial") {
      setItems(response.results);
      setTotalPage(response.total_pages);
    } else {
      setItems([...items, ...response.results]);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const getList = () => loadItems("initial");
    getList();
  }, [cat, keyword]);

  const loadMore = () => loadItems("more");

  return (
    <>
      <div className="section mb-3 movie-search__container">
        <MovieSearch category={cat} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={cat} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

const MovieSearch = ({ keyword: key, category: cat }) => {
  const history = useNavigate();

  const [keyword, setKeyword] = useState(key ? key : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      history(`/${category[cat]}/search/${keyword}`);
      setKeyword("");
    }
  }, [keyword, cat, history]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};

export default MovieGrid;
