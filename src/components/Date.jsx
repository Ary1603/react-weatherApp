import React, { useEffect, useState } from "react";
import moment from "moment";
import "./styles/componentsStyles.css";

function Date() {
  const [hour, setHour] = useState(moment().format("h:mm:ss a"));

  let currentDate = moment().format("MMMM Do YYYY");

  function refreshHour() {
    setHour(moment().format("h:mm:ss a"));
  }

  useEffect(() => {
    const timerId = setInterval(refreshHour, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="currentDate-container">
      <h1 id="hour">{hour}</h1>
      <p className="date">{currentDate}</p>
    </div>
  );
}

export default Date;
