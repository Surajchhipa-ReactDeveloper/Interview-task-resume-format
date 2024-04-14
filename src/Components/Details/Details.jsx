import React from "react";
import "./Details.css";
import Summary from "../Summary/Summary";
import Project from "../Projects/Project";
import Education from "../Education/Education";
import Passions from "../Passions/Passions";
import Languages from "../Languages/Languages";
import Area from "../AREA/Area";
import Skill from "../Skill/Skill";
import Achievements from "../Achievements/Achievements";
import MyComponent from "../AREA/Area";

const Details = () => {
  return (
    <>
      <div className="Details_Main_Container">
        <div className="Details_Left_Container">
          <Summary />
          <Project />
          <Education />
          <Passions />
          <Languages />
        </div>
        <div className="Details_Right_Container">
          <MyComponent />
          <Skill />
          <Achievements />
        </div>
      </div>
    </>
  );
};

export default Details;
