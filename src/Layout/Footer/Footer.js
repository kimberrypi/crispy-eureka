import React from "react";
import { Jumbotron } from "reactstrap";
import logo from "assets/images/ypg_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";

// const details = [
//   {
//     label: "Address",
//     icon: "faMapMarkedAlt"
//   },
//   {
//     label: "Email",
//     icon: "faEnvelope"
//   }
// ];

const Footer = () => (
  <Jumbotron>
    <img src={logo} className="logo" alt="YPG Philippines" width="150px" />{" "}
    <br />
    <FontAwesomeIcon icon={faMapMarkedAlt} />
    <span className="has-icons-left">
      815 R. Papa Street, Sampaloc, Manila City, Metro Manila, Philippines
    </span>
    <br />
    <FontAwesomeIcon icon={faEnvelope} />{" "}
    <span className="has-icons-left">ypg.phils@gmail.com</span>
    <br />
    <FontAwesomeIcon icon={faFacebook} />{" "}
    <span className="has-icons-left">YPGPhils</span>
  </Jumbotron>
);

export default Footer;
