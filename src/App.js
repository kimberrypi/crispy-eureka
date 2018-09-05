import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "Content/Home";
import News from "Content/News/News";
import Navigation from "Layout/Navigation/components/Navigation";
import Footer from "Layout/Footer/Footer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/news" component={News} />
            {/* <Route exact path="/news/:url" component={NewsPage} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
