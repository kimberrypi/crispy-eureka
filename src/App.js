import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GoogleSheet, GoogleSheetsApi } from "@lourd/react-google-sheet";

import Home from "./Content/Home";
import News from "./Content/News/News";
import Navigation from "./Layout/Navigation/components/Navigation";
import Footer from "./Layout/Footer/Footer";
import Membership from "./Content/Membership";

const loadSheets = () => (
  <GoogleSheetsApi
    clientId={`${process.env.REACT_APP_CLIENT_ID}`}
    apiKey={`${process.env.REACT_APP_API_KEY}`}
  >
    {({ authorize, loading: apiLoading, signout, signedIn, error }) => (
      <div>
        {apiLoading ? (
          <div>Loading...</div>
        ) : error ? (
          console.log(error)
        ) : signedIn ? (
          <button onClick={signout}>Sign Out</button>
        ) : (
          <button onClick={authorize}>Authorize</button>
        )}
        {signedIn}
      </div>
    )}
  </GoogleSheetsApi>
);

// loadSheets.propTypes = {
//   clientId: PropTypes.string.isRequired,
//   apiKey: PropTypes.string.isRequired,
//   reset: PropTypes.func.isRequired
// };

class App extends Component {
  render() {
    console.log(loadSheets);
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
