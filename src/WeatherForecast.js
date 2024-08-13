import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }

    const apiKey = "5a66ffb09c7a4o246a78be8f021tfdd3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky-day" size={36} />
            <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19º</span>
                        <span className="WeatherForecast-temperature-min">10º</span> 
            </div>
          </div>
        </div>
      </div>
    );
}