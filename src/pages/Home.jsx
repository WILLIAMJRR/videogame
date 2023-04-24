import React from "react";
import Header from "../components/Header";
import Formgame from "../components/Formgame";
import Games from "../components/Games";
import Aside from "../components/Aside";

const Home = () => {
  return (
    <div>
      <Header />
      <Formgame />
      <div className="home__container">
        <Aside />
        <Games />
      </div>
    </div>
  );
};

export default Home;
