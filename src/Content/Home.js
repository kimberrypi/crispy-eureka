import React from "react";
import MissionVision from "Content/MissionVision";
import banner from "assets/images/admin_council_bw.png";

const Home = () => (
  <React.Fragment>
    <img src={banner} alt="Young Pharmacists Group" width="100%" />
    <MissionVision />
  </React.Fragment>
);

export default Home;
