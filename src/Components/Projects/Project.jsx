import React from "react";
import "./Project.css";
import Heading from "../../Common/Heading/Heading";
import UserLink from "../../Common/UserLink/UserLink";
import { Icon } from "../../Utility/AssetsPath/Icon";

const Project = () => {
  return (
    <div className="Projects_Main_Container">
      <Heading Heading={"PROJECTS/INTERSHIPS"} />
      <div className="Project_Details">
        <div className="Project_name">Project Name</div>
        <div className="Project_date_Location Location_Calender">
          <div className="Project_Date">
            <UserLink IMG={Icon.Calender} Text={"02/2014 - 02/2018"} />
          </div>
          <div className="Project_Location">
            <UserLink IMG={Icon.location} Text={"Chandigarh , Punjab"} />
          </div>
        </div>
        <div className="Projects_text_Container">
          <li>
            Developed and launched the Falcon 1, Falcon 9, Falcon Heavy, and
            Dragon spacecraft.
          </li>
          <li>
            Developed and launched the Falcon 1, Falcon 9, Falcon Heavy, and
            Dragon spacecraft.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Project;
