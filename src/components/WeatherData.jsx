import React, { useEffect, useState } from "react";
import moment from "moment";
import "./styles/componentsStyles.css";

function WeatherData({ weatherData }) {
  let data;
  let hour = moment().format("HH:mm ");

  if (weatherData) {
    data = weatherData.forecast.forecastday[0].hour;
  }

  return (
    <div className="container-weatherData">
      {data ? (
        data.map((item, index) => (
          <div key={index} className="caracteristics-container">
            {item.time.slice(11) > hour ? (
              <div className="col">
                <div className="caracteristics-container-title">
                  <span>Hour: {item.time.slice(11)}</span>
                  <span>Temp: {item.temp_c} C °</span>
                </div>

                <div className="parent">
                  <div className="div1 title-description"> Wind </div>
                  <div className="div2 title-description"> Humidity </div>
                  <div className="div3 title-description"> Fahrenheit </div>
                  <div className="div4"> {item.wind_mph} m/h </div>
                  <div className="div5"> {item.humidity} g / m³</div>
                  <div className="div6"> {item.temp_f} F °</div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Search any location</h1>
      )}
    </div>
  );
}

export default WeatherData;
