import react from "react";

const Nav = () => {
  return (
    <div className="nav">
      <div className="links">
        <div className="aboutlink">
          <a href="">ABOUT</a>
        </div>
        <div className="workslink">
          <a href="">WORKS</a>
        </div>
        <div className="contactlink">
          <a href="">CONTACT</a>
        </div>
      </div>
      <div className="name">
        <h1>CRANE ARCHITECTS</h1>
      </div>
    </div>
  );
};

export default Nav;
