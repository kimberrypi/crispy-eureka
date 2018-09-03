import React, { Component } from "react";
import Home from "Content/Home";
import Navigation from "Layout/Navigation/components/Navigation";
import Footer from "Layout/Footer/Footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
