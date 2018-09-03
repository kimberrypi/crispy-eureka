import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "assets/images/ypg_logo.png";

const navbarItems = [
  {
    link: "/",
    title: "Home"
  },
  {
    link: "/",
    title: "Membership"
  },
  {
    link: "/",
    title: "News"
  },
  {
    link: "/",
    title: "About"
  }
];

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const slides = navbarItems.map((item, index) => {
      return (
        <NavItem key={index}>
          <NavLink href={item.link}>{item.title}</NavLink>
        </NavItem>
      );
    });

    return (
      <React.Fragment>
        <Navbar expand="md" fixed>
          <NavbarBrand href="/">
            <img src={logo} alt="YPG Philippines" width="75px" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {slides}
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;
