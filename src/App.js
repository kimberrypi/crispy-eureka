import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "Content/Home";
import Navigation from "Layout/Navigation/components/Navigation";
import Footer from "Layout/Footer/Footer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation />
          <Home />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
