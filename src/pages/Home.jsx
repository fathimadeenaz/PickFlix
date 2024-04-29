import { Link } from "react-router-dom";

import { category, movieType, tvType } from "../api/tmdbApi";

import { HeroSlide, MovieList, OutlineButton } from "../components/index";

const Home = () => {
  const sections = [
    {
      title: "Trending Movies",
      link: "/movie",
      cat: category.movie,
      type: movieType.popular,
    },
    {
      title: "Top Rated Movies",
      link: "/movie",
      cat: category.movie,
      type: movieType.top_rated,
    },
    {
      title: "Trending TV",
      link: "/tv",
      cat: category.tv,
      type: tvType.popular,
    },
    {
      title: "Top Rated TV",
      link: "/tv",
      cat: category.tv,
      type: tvType.top_rated,
    },
  ];

  return (
    <>
      <HeroSlide />
      <div className="container">
        {sections.map((section, i) => (
          <div key={i} className="section mb-3">
            <div className="section__header mb-2">
              <h2>{section.title}</h2>
              <Link to={section.link}>
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={section.cat} type={section.type} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
