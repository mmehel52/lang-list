import Card from "./components/card/Card";
import { languages } from "./helper/data.js";
import react from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="topimg" src={react} alt="img" />

      <div className="bigCard">
        <h1>Languages</h1>
        {languages.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
