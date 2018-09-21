import React from "react";
import { Row, Col } from "reactstrap";
import Content from "Layout/Content";
import Officers from "./About/Officers";
import salenga from "assets/images/roderick_salenga.png";

const renderFoundingPresicent = (
  <Row>
    <Col>
      <img src={salenga} alt="Eric Salenga" width="300px" />
    </Col>
    <Col>
      <h3>Roderick Salenga</h3> <br /> Founding President{" "}
      <p>
        <q>
          The decisions that our leaders make about our profession will affect
          us the most in the future
        </q>
      </p>
    </Col>
  </Row>
);

const About = () => (
  <Content title="About Us">
    {renderFoundingPresicent} <Officers />
  </Content>
);

export default About;
