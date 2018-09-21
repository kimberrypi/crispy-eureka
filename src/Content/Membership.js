import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Content from "Layout/Content";

const ways = [
  {
    title: "Join accredited YPG chapters, programs and general assemblies",
    description:
      "<span>Attendance to any YPG programs and general assemblies include lifetime membership fee of Php500.</span>"
  },
  {
    title: "Register Online",
    description:
      "<ol><li><strong>Deposit Membership Fee</strong><p>Deposit payment (one-timelifetime membership fee is pegged at 500 pesos, valid until member's 35th birthday) to the following bank account:</p><p><b>Security Bank Account</b><br/>Account Number: 000000 8979 515 <br/> Account Name: Young Pharmacists Group Philippines</p></li><li><strong>Scan and Send</strong><p>Send a copy of the deposit slip to: <b>ypg.phils@gmail.com</b>.</p></li><li>Wait for Confirmation Email containing the comprehensive Membership Application Form and the scanned copy of the OR. Fill out the comprehensive Membership Application Form for completion. Identification cards may be obtained on your first attendance to any YPG activities.<p></p></li></ol>"
  },
  {
    title: "Visit our booth during oath-taking and natcon",
    description:
      "<span>Don't forget to bring Php500 for the Membership Fee!</span>"
  }
];

const renderMembershipProcess = (
  <section>
    <header>
      <h3>How to be a member</h3>
      <p className="is-muted">There are three easy ways!</p>
    </header>
    <ListGroup>
      {ways.map((way, index) => (
        <React.Fragment key={index}>
          <ListGroupItem color="info">{way.title}</ListGroupItem>
          <ListGroupItem>
            <div dangerouslySetInnerHTML={{ __html: way.description }} />
          </ListGroupItem>
          <br />
        </React.Fragment>
      ))}
    </ListGroup>
  </section>
);

const Membership = () => (
  <Content title="Membership">{renderMembershipProcess}</Content>
);

export default Membership;
