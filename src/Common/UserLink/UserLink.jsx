import React from "react";
import "./UserLink.css";
import { Icon } from "../../Utility/AssetsPath/Icon";
const UserLink = ({ Text, IMG }) => {
  return (
    <div className="User_Link_Container">
      <div className="Left_logo">
        <img src={IMG} alt="" />
      </div>
      <div className="Right_Text">{Text}</div>
    </div>
  );
};

export default UserLink;
