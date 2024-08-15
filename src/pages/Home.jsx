import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Card />);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <Hero />
      </div>
      <div className="flex flex-wrap justify-center items-center py-4 w-full gap-2 mx-5">
        {cards}
      </div>
    </div>
  );
};

export default Home;
