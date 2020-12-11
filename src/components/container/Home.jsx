import React, { useState } from "react";
import "../styles/Home.css";
import { useSelector } from "react-redux";
import { showCost, loadCost } from "../../redux/actions/routeActions";
import { useDispatch } from "react-redux";
import Form from "../presentational/Form";
import Spinner from "../presentational/Spinner";

const Home = () => {
  let dispatch = useDispatch();
  let [option, setOption] = useState("");
  let [vehicle, setVehicle] = useState("");
  let [distance, setDistance] = useState("");
  let [costRatio, setCostRatio] = useState("");
  let [origin, setOrigin] = useState("");
  let [destination, setDestination] = useState("");

  const showMessage = useSelector(
    (state) => state.routeCalculatorReducer.showCost
  );
  const cost = useSelector(
    (state) => state.routeCalculatorReducer.loadCost.cost
  );
  const isLoading = useSelector(
    (state) => state.routeCalculatorReducer.loadCost.isLoading
  );
  const error = useSelector(
    (state) => state.routeCalculatorReducer.loadCost.error
  );

  const onFieldChange = (value, setValue) => {
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch(showCost());
    dispatch(loadCost(option, vehicle, distance, origin, destination, costRatio));
  };

  return (
    <main className="home">
      <h1>This is a Route Cost Calculator for Hedyla</h1>
      <section className="home__form-container">
        <Form
          option={option}
          setOption={setOption}
          vehicle={vehicle}
          setVehicle={setVehicle}
          distance={distance}
          setDistance={setDistance}
          costRatio={costRatio}
          setCostRatio={setCostRatio}
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          onFieldChange={onFieldChange}
          handleSubmit={handleSubmit}
        />
      </section>
      {showMessage && isLoading === true ? (
        <div className="spinner__active">
          <Spinner />
        </div>
      ) : showMessage && error?.response ? (
        <h1>{error.response}</h1>
      ) : showMessage ? (
        <h3 className="home__calculatated-message">
          The resulting cost is {cost} euros, including fees.
        </h3>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Home;
