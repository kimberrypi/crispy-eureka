import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Content/Home";
import News from "./Content/News/News";
import Navigation from "./Layout/Navigation/components/Navigation";
import Footer from "./Layout/Footer/Footer";
import Membership from "./Content/Membership";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            {/* <Route exact path="/news/:url" component={NewsPage} /> */}
            <Route exact path="/membership" component={Membership} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
