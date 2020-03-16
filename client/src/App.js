import React, { Component } from "react";
import Home from "./components/Home";
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
          <Link to="/resume">
            <button className="app__button"> Resume </button>
          </Link>
          <Link className="app__button" to="/card">
            <button className="app__button"> Card </button>
          </Link>
          <Link className="app__button" to="/createnew">
            <button className="app__button"> Createnew </button>
          </Link>
        </>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/createnew" exact>
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
