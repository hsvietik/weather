import Header from "./Components/MyHeader/MyHeader.jsx";
import WeatherCard from "./Components/MyWeatherCard/MyWeatherCard.jsx";
import "./App.css";
// import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
