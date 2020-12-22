import React, { useState } from "react";
import "../styles/Home.css";
import { useSelector } from "react-redux";
import { showCost, loadCost } from "../../redux/actions/routeActions";
import { useDispatch } from "react-redux";
import Form from "../presentational/Form";
import Spinner from "../presentational/Spinner";
import { googleMapsApiKey } from "../../data/constants";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "../presentational/Map";
import { option2 } from "../../data/constants";

const Home = () => {
  let dispatch = useDispatch();
  let [option, setOption] = useState("");
  let [vehicle, setVehicle] = useState("");
  let [distance, setDistance] = useState("");
  let [costRatio, setCostRatio] = useState("");
  let [origin, setOrigin] = useState("");
  let [destination, setDestination] = useState("");

  const WrappedMap = withScriptjs(withGoogleMap(Map));  

  const showMessage = useSelector(
    (state) => state.routeCalculatorReducer.showCost
  );
  const cost = useSelector(
    (state) => state.routeCalculatorReducer.loadCost?.cost
  );
  const showMap = useSelector(
    (state) => state.routeCalculatorReducer.loadCost?.option
  );
  const isLoading = useSelector(
    (state) => state.routeCalculatorReducer.loadCost?.isLoading
  );
  const error = useSelector(
    (state) => state.routeCalculatorReducer.loadCost?.error
  );
  const formattedOrigin = useSelector(
    (state) => state.routeCalculatorReducer.loadCost?.originGeoCodedFormatted
  );
  const formattedDestination = useSelector(
    (state) => state.routeCalculatorReducer.loadCost?.destinationGeoCodedFormatted
  );

  const onFieldChange = (value, setValue) => {
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch(showCost());
    dispatch(
      loadCost(option, vehicle, distance, origin, destination, costRatio)
    );
  };

  return (
    <main className="home">
      <h1>Welcome to Dani Alcalà's Route Cost Calculator!</h1>
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
      {showMessage && isLoading ? (
        <div className="spinner__active">
          <Spinner />
        </div>
      ) : showMessage && error ? (
        <h2 className="error__message">{"Sorry, there was an error, we're trying to fix it!"}</h2>
      ) : showMessage ? (
        <h3 className="home__calculatated-message">
          The resulting cost is {cost} euros, including fees.
        </h3>
      ) : (
        <></>
      )}
      {showMap === option2 && (
        <section className="map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=${googleMapsApiKey}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "80vh" }} />}
            mapElement={<div style={{ height: `100%` }} />}
            formattedOrigin={formattedOrigin}
            formattedDestination={formattedDestination}
          />
        </section>
      )}
    </main>
  );
};

export default Home;
