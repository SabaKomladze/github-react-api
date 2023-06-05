import { useState } from "react";
import "./App.css";
import Mainboard from "./Mainboard";
function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState(false);
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

        if (!data.login) {
          setError(true);
          setUser(null);
        } else {
          setUser(data);
          setError(false);
        }
      });
  };
  const changeTheme = () => {
    setTheme(!theme);
  };
  console.log(theme);
  return (
    <div
      className="container"
      style={
        theme ? { backgroundColor: "#141D2F" } : { backgroundColor: "#F6F8FF" }
      }
    >
      <div className="app">
        <header>
          <h2
            className="devfinder"
            style={theme ? { color: "#FFFFFF" } : { color: "#222731" }}
          >
            devfinder
          </h2>
          <div className="theme" onClick={changeTheme}>
            <p className="color">dark</p>
            <img src="./assets/icon-moon.svg" alt="moon" className="moon" />
          </div>
        </header>
        <section className="searchBar">
          <input
            type="text"
            className="input"
            onChange={onChange}
            style={
              theme
                ? { backgroundColor: "#1E2A47" }
                : { backgroundColor: "#FEFEFE" }
            }
          />
          <img src="./assets/icon-search.svg" alt="search" className="search" />
          <button className="btn" onClick={onSubmit}>
            Search
          </button>
          {error ? <p className="erroractive">No results</p> : null}
        </section>
        {user ? <Mainboard user={user} theme={theme} /> : null}
      </div>
    </div>
  );
}

export default App;
