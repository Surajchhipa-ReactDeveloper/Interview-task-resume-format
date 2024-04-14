import React from "react";
import "./Languages.css";
import Heading from "../../Common/Heading/Heading";
const Languages = () => {
  return (
    <div className="Languages_main_container">
      <Heading Heading={"Languages"} />
      <div className="Languages_Type">
        <div className="Languages_Left_Container ">
          <div className="Languages_type">
            <div className="Languages_Name">English</div>
            <div className="Languages_Level">Basic</div>
          </div>
          <div className="Languages_Rating">
            <div className="rating"></div>
            <div className="rating"></div>
            <div className="rating"></div>
            <div className="rating"></div>
            <div className="rating"></div>
          </div>
        </div>
        <div className="Languages_Left_Container">
          <div className="Languages_type">
            <div className="Languages_Name">Hindi</div>
            <div className="Languages_Level">Advance</div>
          </div>
          <div className="Languages_Rating">
            <div className="rating"></div>
            <div className="rating"></div>
            <div className="rating"></div>
            <div className="rating"></div>
            <div className="rating NON-rating"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
