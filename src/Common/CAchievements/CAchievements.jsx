import React from "react";
import "./CAchievements.css";
import Heading from "../Heading/Heading";
const CAchievements = ({ IMG, Name, About }) => {
  return (
    <div className="CAchievements_Container ">
      <div className="CAchievements_Left_Container">
        <img src={IMG} alt="" />
      </div>
      <div className="CAchievements_Right_Container ">
        <div className="Achievements_Name">{Name}</div>
        <div className="Achievements_About">{About}</div>
      </div>
    </div>
  );
};

export default CAchievements;
