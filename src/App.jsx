import { useState } from "react";
import "./App.css";
import Mainboard from "./Mainboard";
function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

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
        <input type="text" className="input" onChange={onChange} />
        <img src="./assets/icon-search.svg" alt="search" className="search" />
        <button className="btn" onClick={onSubmit}>
          Search
        </button>
      </section>
      {user ? <Mainboard user={user} /> : null}
    </div>
  );
}

export default App;
