import React from "react";
import "./Achievements.css";
import CAchievements from "../../Common/CAchievements/CAchievements";
import { Icon } from "../../Utility/AssetsPath/Icon";
import Heading from "../../Common/Heading/Heading";

const Achievements = () => {
  return (
    <div className="Achievements_Main_Container">
      <Heading Heading={"ACHIEVEMENTS"} />
      <div className="Achievements_Type">
        <div className="Achievements1">
          <CAchievements
            IMG={Icon.Star1}
            Name={"Falcon 1 Launch"}
            About={
              "The first successful launch of a privatelyd eveloped rocket."
            }
          />
        </div>
        <div className="Achievements2">
          <CAchievements
            IMG={Icon.Award}
            Name={"Model S Launch"}
            About={"The launch of the world's first premium electric car."}
          />
        </div>
        <div className="Achievements3">
          <CAchievements
            IMG={Icon.Engery}
            Name={"Mars Colonization"}
            About={"The plan to make humanity a multiplanetary species."}
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
