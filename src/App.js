import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="Omaha" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer">
            Dana Paulette Perkins
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/dperki02/react-weather-app"
            target="_blank"
            rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-dpp.netlify.app"
            target="_blank"
            rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}