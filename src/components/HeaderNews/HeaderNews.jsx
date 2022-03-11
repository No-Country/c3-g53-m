import React from 'react';
import {Link} from "react-router-dom";
import "./HeaderNews.css";

const HeaderNews = () => {
  return (
      <div>
        <nav id="hamnav">
          <label for="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger" />
          <div id="hamitems">
            <Link to="/" className="title">BasketProject🏀</Link>
          </div>
        </nav>
      </div>
  );
}

export default HeaderNews;
