import React from "react";
import { Container } from "reactstrap";

const Content = ({ title, children }) => (
  <div className="has-top-and-bottom-padding">
    <Container>
      <h3 className="display-4 text-center">{title}</h3>
      <hr />
      {children}
    </Container>
  </div>
);

export default Content;
