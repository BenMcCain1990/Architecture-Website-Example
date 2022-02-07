import react from "react";
import homeimage1 from "../Images/houserock.png";
import homeimage2 from "../Images/naturehouse.png";

const Home = () => {
  return (
    <div className="home">
      <img id="homeimage1" src={homeimage1} alt="apartments" />
      <img id="homeimage2" src={homeimage2} alt="apartments" />
    </div>
  );
};

export default Home;
