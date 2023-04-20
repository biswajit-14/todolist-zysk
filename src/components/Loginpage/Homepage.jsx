import React from "react";
import { Link } from "react-router-dom";
// import style from "./loginpage.module.css";

const HomePage = () => {

  return (
    <section>
      <nav className="nav">
        <ul className="list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default HomePage;
