import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css"; // Import the default styles
import Heading from "../../Common/Heading/Heading"; // Assuming Heading is a custom component you've defined

const MyComponent = () => {
  const [projectManagementValue, setProjectManagementValue] = useState({
    min: 0,
    max: 20,
  });
  const [teamHandlingValue, setTeamHandlingValue] = useState({
    min: 0,
    max: 20,
  });

  return (
    <div className="Area_Main_Container">
      <Heading Heading={"AREA OF EXPERTISE"} />
      <div className="Project_Level Border_Button">
        Project Management
        <InputRange
          maxValue={10}
          value={projectManagementValue}
          onChange={(value) => setProjectManagementValue(value)}
        />
      </div>
      <div className="Project_Level Border_Button">
        TEAM HANDLING
        <InputRange
          maxValue={20}
          value={teamHandlingValue}
          onChange={(value) => setTeamHandlingValue(value)}
        />
      </div>
    </div>
  );
};

export default MyComponent;
