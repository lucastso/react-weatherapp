import React from "react";
import "./styles/global.css";

const api = {
  key: "0b0ca6fa9adc654e2ac88c0f45cede6f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
