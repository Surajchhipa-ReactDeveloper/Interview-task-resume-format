import React from "react";
import "./Passion.css";
import Heading from "../../Common/Heading/Heading";
import { Icon } from "../../Utility/AssetsPath/Icon";

const Passions = () => {
  return (
    <div className="Passions_Main_Container ">
      <Heading Heading={"PASSIONS"} />
      <div className="Passions_Logo_Container ">
        <div className="Passions_Logo">
          <img src={Icon.Dimand} alt="" />
          Reading Books
        </div>
        <div className="Passions_Logo">
          <img src={Icon.Dimand} alt="" />
          Writing Poems
        </div>
      </div>
    </div>
  );
};

export default Passions;
