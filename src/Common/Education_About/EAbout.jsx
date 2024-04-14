import React from "react";
import "./EAbout.css";
import UserLink from "../UserLink/UserLink";
import { Icon } from "../../Utility/AssetsPath/Icon";

const EAbout = () => {
  return (
    <div className="Education_About_Container">
      <div className="Education_About_Left_Container">
        <div className="Education_Heading">
          Master Of Business Administration
        </div>
        <div className="Education_University_Name">Panjab University</div>
        <div className="Location_Calender Education_Location_Date">
          <div className="Project_Date">
            <UserLink IMG={Icon.Calender} Text={"02/2014 - 02/2018"} />
          </div>
          <div className="Project_Location">
            <UserLink IMG={Icon.location} Text={"Chandigarh , Punjab"} />
          </div>
        </div>
      </div>
      <div className="Education_About_Right_Container">
        CGPA
        <div className="Cgpa_Point">
          <span className="Span">7.2</span> / 10
        </div>
      </div>
    </div>
  );
};

export default EAbout;
