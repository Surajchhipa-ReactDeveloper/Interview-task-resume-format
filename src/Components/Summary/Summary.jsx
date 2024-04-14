import React from "react";
import "./Summary.css"
import Heading from "../../Common/Heading/Heading";
const Summary = () => {
  return (
    <>
      <div className="Summary_Main_Container All_Details_Common_Heading">
        <Heading Heading={"SUMMARY"} />
        <div className="Summery_text_Container">
          Passionate entrepreneur and visionary leader in technology, with a
          proven track record of driving innovation and creating disruptive
          companies. Skilled in strategic planning, product development, and
          team management.
        </div>
      </div>
    </>
  );
};

export default Summary;
