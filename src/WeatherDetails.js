import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDetails(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex">
          <img
            src={props.data.icon_url}
            alt={props.data.icon}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">ºC</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
