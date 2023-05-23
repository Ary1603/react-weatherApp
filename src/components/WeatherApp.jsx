import React, { useState } from "react";
import Date from "./Date";
import WeatherData from "./WeatherData";

function WeatherApp() {
  const [place, setPlace] = useState();
  const [weatherData, setWeatherData] = useState();

  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  //Fetch
  const fetchApi = (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => console.error("Error en la peticion: " + error));
  };

  function searchWeather() {
    fetchApi(
      `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${place}&days=5&aqi=no&alerts=no`
    );
  }

  return (
    <div className="app-container">
      <form className="input-place">
        <input
          onChange={(e) => setPlace(e.target.value)}
          type="text"
          name="city"
          placeholder="Enter city"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            searchWeather();
          }}
          type="submit"
        >
          Search
        </button>
      </form>
      <Date />
      {weatherData ? (
        <>
          <p id="location">{`${weatherData.location.name}, ${weatherData.location.country} ${weatherData.current.temp_c} C °`}</p>
        </>
      ) : (
        <></>
      )}
      <WeatherData weatherData={weatherData} />
    </div>
  );
}

export default WeatherApp;
