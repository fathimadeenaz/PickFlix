import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/pickflix.png";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">PICKFLIX</Link>
          </div>
        </div>
        <div className="footer__content__item">All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
