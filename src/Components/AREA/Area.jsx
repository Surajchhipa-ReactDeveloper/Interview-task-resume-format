import React from "react";
import "./Area.css";
import Heading from "../../Common/Heading/Heading";
const Area = () => {
  return (
    <div className="Area_Main_Container">
      <Heading Heading={"AREA OF EXPERTISE"} />
      <div className="Project_Level">
        Project Management
        <input
          type="range"
          name=""
          id="projectRange"
          class="input black"
        />{" "}
      </div>
      <div className="Project_Level">
        Project
        <input
          type="range"
          name=""
          id="projectRange"
          class="input black"
        />{" "}
      </div>
    </div>
  );
};

export default Area;
