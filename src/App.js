import react from "react";
import Nav from "./Components/Nav";
import Styles from "./Styles/App.scss";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
