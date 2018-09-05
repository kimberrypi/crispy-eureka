import React from "react";
import { Row, Col, Container } from "reactstrap";

const ideal = [
  "integrity",
  "dedication",
  "excellence",
  "altruism",
  "leadership"
];

const Values = () => (
  <section
    className="hero is-medium"
    style={{ background: "rgb(19, 49, 149) ", color: "white" }}
  >
    <div className="hero-body">
      <h3 className=" display-4 text-center">Our Values</h3>
      {/* <hr className="my-6" /> */}
      <br />
      <Container>
        <Row>
          {ideal.map((item, index) => (
            <Col key={index}>
              <div>
                <h3 className="display-1 text-center">
                  {item[0].toUpperCase()}
                </h3>
                <p className="text-center">{item.toUpperCase()}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </section>
);

export default Values;
