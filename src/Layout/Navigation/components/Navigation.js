import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import logo from "../../../assets/images/ypg_logo.png";

const navbarItems = [
  {
    link: "/",
    title: "Home"
  },
  {
    link: "/membership",
    title: "Membership"
  },
  {
    link: "/news",
    title: "News"
  },
  {
    link: "/about",
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
          <Link className="nav-link" to={item.link}>
            {item.title}
          </Link>
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
