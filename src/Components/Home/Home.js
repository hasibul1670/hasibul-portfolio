import React from "react";
import About from "../About/About";
import Hader from "../Hader/Hader";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

function Home() {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>

      <div className="color">
        <Hader></Hader>
        <Project></Project>
        <Skill />
        <About></About>
      </div>
    </div>
  );
}

export default Home;
