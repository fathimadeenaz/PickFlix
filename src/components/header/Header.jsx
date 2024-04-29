import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/pickflix.png";

import "./header.scss";

const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Movies",
    path: "/movie",
  },
  {
    title: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = menuItems.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">PICKFLIX</Link>
        </div>
        <ul className="header__nav">
          {menuItems.map((item, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
