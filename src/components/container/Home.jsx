import React, { useState } from "react";
import "../styles/Home.css";
import { useSelector } from "react-redux";
import { showCost, loadCost } from "../../redux/actions/routeActions";
import { useDispatch } from "react-redux";
import Form from "../presentational/Form";

const Home = () => {
  let dispatch = useDispatch();
  let [distance, setDistance] = useState("");
  let [costRatio, setCostRatio] = useState("");

  const show = useSelector((state) => state.routeCalculatorReducer.showCost);
  const cost = useSelector((state) => state.routeCalculatorReducer.loadCost);

  const onFieldChange = (value, setValue) => {
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch(showCost());
    dispatch(loadCost(distance, costRatio));
  };

  return (
    <main className="home">
      <h1>This is a Route Calculator for Hedyla</h1>
      <section className="home__form-container">
        <Form
          distance={distance}
          setDistance={setDistance}
          costRatio={costRatio}
          setCostRatio={setCostRatio}
          onFieldChange={onFieldChange}
          handleSubmit={handleSubmit}
        />
      </section>
      {show && <h3 className="home__calculatated-message">
        The resulting cost is {cost} euros.
      </h3>}
    </main>
  );
};

export default Home;
