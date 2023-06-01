import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        <h2 className="devfinder">devfinder</h2>
        <div className="theme">
          <p className="color">dark</p>
          <img src="./assets/icon-moon.svg" alt="moon" className="moon" />
        </div>
      </header>
      <section className="searchBar">
        <input type="text" className="input" />
        <img src="./assets/icon-search.svg" alt="search" className="search" />
        <button className="btn">Search</button>
      </section>
    </div>
  );
}

export default App;
