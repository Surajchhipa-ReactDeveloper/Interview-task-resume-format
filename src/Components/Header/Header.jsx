import React from "react";
import "./Header.css";
import { Icon } from "../../Utility/AssetsPath/Icon";
import UserLink from "../../Common/UserLink/UserLink";
const Header = () => {
  return (
    <>
      <div className="Header_Container">
        <div className="Header_Left_Container">
          <div className="User_Name">SUZAN KUMAR</div>
          <div className="User_Work">Master Innovator</div>
          <div className="User_Other_Details">
            <div className="Call_And_Link_Container ">
              <UserLink IMG={Icon.Call} Text={"+91-765-454-3010"} />
              <UserLink IMG={Icon.Link} Text={"bharatlinkr.com/harjinder"} />
            </div>
            <div className="Mail_And_Location_Container">
              <UserLink IMG={Icon.AAat} Text={"help@bharatlinkr.com"} />
              <UserLink IMG={Icon.location} Text={"Dera Bassi, Punjab, INDIA"} />
            </div>
          </div>
        </div>
        <div className="Header_Right_Container">
          <div className="User_Profile">
            <img src={Icon.Profile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
