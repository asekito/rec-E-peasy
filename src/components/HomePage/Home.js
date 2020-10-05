import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id='homepage-content'>
      <div id='home-bkimg' />
      <h2 className='home title'>
        simple and to the point . . .<span>|</span>
      </h2>
      <div id='home-intro'>
        <p>
          Tired of restrictive recipe websites? Tired of having to input every
          single step of a meal you made from winging it?
        </p>
        With Rec-E-Peasy, you can add your recipe its ingredients and you can be
        as specific with the measurements or not as you want. List them out and
        boom, you have all the meals ingredients in one space with rough or
        precise estimates.
        <p>
          Simple, to the point, and works with the home chef that loves winging
          it when it comes to cooking.
        </p>
      </div>
    </div>
  );
};

export default Home;
