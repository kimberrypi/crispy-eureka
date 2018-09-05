import React from "react";
import MissionVision from "Content/MissionVision";
import Values from "Content/Values";
import banner from "assets/images/admin_council_bw.png";

const HomePage = () => (
  <React.Fragment>
    <img src={banner} alt="Young Pharmacists Group" width="100%" />
    <MissionVision />
    <Values />
  </React.Fragment>
);

export default HomePage;
