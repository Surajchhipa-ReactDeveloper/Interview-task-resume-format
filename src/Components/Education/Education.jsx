import React from "react";
import "./Education.css";
import Heading from "../../Common/Heading/Heading";
import EAbout from "../../Common/Education_About/EAbout";
const Education = () => {
  return (
    <div className="Education_Main_Container All_Details_Common_Heading">
      <Heading Heading={"SUMMARY"} />
      <div className="Education_Details_Container">
        <EAbout />
        <EAbout />
        <EAbout />
      </div>
    </div>
  );
};

export default Education;
