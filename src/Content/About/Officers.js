import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Media
} from "reactstrap";
import classnames from "classnames";
import officers from "./officers.json";

class Officers extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const renderTabs = officers.map((batch, index) => (
      <NavItem key={index}>
        <NavLink
          className={classnames({
            active: this.state.activeTab === batch.id
          })}
          onClick={() => {
            this.toggle({ index });
          }}
        >
          {batch.year}
        </NavLink>
      </NavItem>
    ));

    const renderTabContent = (
      <Row>
        <TabContent activeTab={this.state.activeTab}>
          {officers.map((batch, index) => (
            <TabPane tabId={batch.id} key={index}>
              <Row>
                <Media>
                  <Media left>
                    <img
                      src={batch.officers[0].imageUrl}
                      alt={batch.officers[0].name}
                      className="img-thumbnail"
                    />
                    {/* <Media
                      object
                      data-src="holder.js/64x64"
                      // data-src={batch.officers[0].imageUrl}
                      alt={batch.officers[0].name}
                    /> */}
                  </Media>
                </Media>
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </Row>
    );

    return (
      <div>
        <Nav tabs>{renderTabs}</Nav>
        <TabContent activeTab={this.state.activeTab}>
          {renderTabContent}
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Officers;
