import React from "react";
import "../styles/Home.css";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const routeCalculator = useSelector(
    (state) => state.routeCalculatorReducer.loadRoute
  );

  return (
    <main className="home">
      <h1>Hi</h1>
      <h2>{routeCalculator}</h2>
    </main>
  );
};

export default LandingPage;
