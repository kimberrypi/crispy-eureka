import React from "react";
import MissionVision from "./MissionVision";
import Values from "./Values";
import banner from "../assets/images/admin_council_bw.png";

const renderPrimer = (
  <section style={{ "text-align": "center" }}>
    {/* <header>
      <h3>YPG Primer</h3>
    </header> */}
    <iframe
      width="80%"
      height="720px"
      src="https://www.youtube.com/embed/euXhWJp9h9k"
      frameborder="0"
      allow="autoplay; encrypted-media"
      title="YPG Primer"
      allowfullscreen
    />
  </section>
);

const Home = () => (
  <React.Fragment>
    <img src={banner} alt="Young Pharmacists Group" width="100%" />
    <MissionVision />
    <Values />
    {renderPrimer}
  </React.Fragment>
);

export default Home;
