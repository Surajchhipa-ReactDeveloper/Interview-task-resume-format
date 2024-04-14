import React from "react";
import "./Skill.css";
import Heading from "../../Common/Heading/Heading";
import CSkill from "../../Common/SkillCommon/CSkill";

const Skill = () => {
  return (
    <>
      <div className="Skill_Main_Container">
        <Heading Heading={"Skill"} />
        <div className="Skill_Name">
          <div className="Skill_1 Common_Skill">
            <CSkill Skill={"Leadership"} />
            <CSkill Skill={"Innovation"} />
          </div>
          <div className="Skill_1 Common_Skill">
            <CSkill Skill={"Entrepreneurship"} />
            <CSkill Skill={"Strategic Planning"} />
          </div>
          <div className="Skill Common_Skill">
            <CSkill Skill={"Product Development"} />
          </div>
          <div className="Skill Common_Skill">
            <CSkill Skill={"Team Management"} />
          </div>
          <div className="Skill Common_Skill">
            <CSkill Skill={"Electric Vehicle Technology"} />
          </div>
          <div className="Skill Common_Skill">
            <CSkill Skill={"Space Technology"} />
          </div>
          <div className="Skill Common_Skill">
            <CSkill Skill={"Sustainable Energy"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
