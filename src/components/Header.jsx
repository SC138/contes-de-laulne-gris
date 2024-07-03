import React from "react";
import "./Header.css";
import bannerImage from "../assets/img/banner.jpg";

const Header = () => {
  return (
    <header>
      <img
        src={bannerImage}
        alt="Les Contes de l'Aulne Gris"
        className="banner-image"
      />

      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/festival-styx">Festival STYX</a>
          </li>
          <li>
            <a href="/association">L'association</a>
          </li>
          <li>
            <a href="/actualites">Actualités</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
