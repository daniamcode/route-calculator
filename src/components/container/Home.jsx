import React, { useState } from "react";
import "../styles/Home.css";
import { useSelector } from "react-redux";
import { loadCost } from "../../redux/actions/routeActions";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Home = () => {
  let dispatch = useDispatch();

  let [distance, setDistance] = useState("");
  let [costRatio, setCostRatio] = useState("");
  const cost = useSelector((state) => state.routeCalculatorReducer.loadCost);
  console.log(cost)

  const onFieldChange = (value, setValue) => {
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch(loadCost(distance, costRatio));
  };

  return (
    <main className="home">
      <h1>This is a Route Calculator for Hedyla</h1>
      <section className="home__form-container">
        <form className="home__form" onSubmit={handleSubmit}>
          <div className="home__form-title">
            Introduce the data and calculate the route!
          </div>
          <div className="home__form-inner-container">
            <TextField
              id="distance"
              variant="filled"
              className="home__form-input"
              placeholder="Introduce the distance in km"
              name="distance"
              required
              value={distance}
              onChange={(event) =>
                onFieldChange(event.target.value, setDistance)
              }
            />
            <TextField
              id="costRatio"
              variant="filled"
              className="home__form-input"
              placeholder="Introduce the cost in €/km"
              name="costRatio"
              required
              value={costRatio}
              onChange={(event) =>
                onFieldChange(event.target.value, setCostRatio)
              }
            />
            <Button
              variant="contained"
              color="primary"
              className="home__form-button"
              type="submit"
            >
              Calculate cost of the route
            </Button>
          </div>
        </form>
      </section>
        <h3 className="home__calculatated-message">The resulting cost is {cost} euros.</h3>
    </main>
  );
};

export default Home;
