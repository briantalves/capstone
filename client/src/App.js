import React, { Component } from "react";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Card from "./components/Card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../src/styles/App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <>
          <Link to="/resume">Resume</Link>
          <Link to="/card">Card</Link>
          <Link to="/">Form</Link>
        </>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/" exact>
            <Form />
          </Route>
          <Route path="/card">
            <Card />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
