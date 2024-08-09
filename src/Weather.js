import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready:false});
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(props.defaultCity);


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value)
  }

  function search() {
        const apiKey = "5a66ffb09c7a4o246a78be8f021tfdd3";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        console.log(apiUrl);
  }

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
    console.log(response.data.temperature.current);
    console.log(temperature);

    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      icon_url: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
