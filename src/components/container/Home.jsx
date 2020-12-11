import React, { useState } from "react";
import "../styles/Home.css";
import { useSelector } from "react-redux";
import { showCost, loadCost } from "../../redux/actions/routeActions";
import { useDispatch } from "react-redux";
import Form from "../presentational/Form";
import Map from "../presentational/Map";
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

  const googleMapsApiKey = "AIzaSyBkrYRsEcxYmWtNcs5DlaNV76DOMHlpUfA";

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = {}

  const places = [
    {latitude: 25.8103146,longitude: -80.1751609},
    {latitude: 27.9947147,longitude: -82.5943645},
    {latitude: 28.4813018,longitude: -81.4387899}
  ]

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
    <section className="map">
    <Map
      googleMapURL={
        'https://maps.googleapis.com/maps/api/js?key=' +
        googleMapsApiKey +
        '&libraries=geometry,drawing,places'
      }
      markers={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "80vh"}}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      defaultCenter={defaultCenter || {lat: 25.798939, lng: -80.291409}}
      defaultZoom={defaultZoom || 11}
    />
    </section>
    </main>
  );
};

export default Home;
