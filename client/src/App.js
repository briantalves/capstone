import React, { Component } from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Card from "./components/Card";
import uuid from "uuid";
import axios from "axios";
import Footer from "./components/Footer";
import Brian from "./components/Brian";
import Buttons from "./components/Buttons";
import Example from "./components/Example";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import "../src/styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLoad: true,
      newMember: undefined
    };
    //does whatever stuff
    this.id = uuid.v4();
    this.submitHandler = this.submitHandler.bind(this);
  }

  formHandler = event => {
    this.setState({
      formLoad: true
    });
  };
  submitHandler = event => {
    event.preventDefault();
    return axios
      .post("http://localhost:5000/api/contact/createnew/", {
        id: this.id,
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        profession: event.target.profession.value,
        linkedin: event.target.linkedin.value,
        github: event.target.github.value
      })
      .then(res =>
        this.setState({
          formLoad: false,
          newMember: res.data
        })
      );
  };
  //think this what's wrong
  // getUser = async () => {
  //   axios.get(`http://localhost:5000/api/contact/`, {}).then(res => {
  //     retur
  //   });
  // };
  render() {
    console.log(this.state);
    return (
      <Router>
        <>
          {/* <Link to="/resume">
            <button className="app__button"> Resume </button>
          </Link>
          {this.state.formLoad ? (
            <Link className="app__button" to="/createnew">
              <button className="app__button"> Createnew </button>
            </Link> */}
          {/* ) : (
          // <button onClick={this.formHandler} className="app__button">
            {" "}
            Create New{" "}
          </button> */}
          {/* )} */}
        </>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/examplecard">
            <Brian />
          </Route>
          <Route
            path="/createnew"
            exact
            render={() => {
              return <Form />;
            }}
          >
            {this.state.formLoad ? (
              <Form handleSubmit={this.submitHandler} />
            ) : (
              <Card newMember={this.state.newMember && this.state.newMember} />
            )}
          </Route>
          <Route path="/card">
            <Card newMember={this.state.newMember && this.state.newMember} />
          </Route>
          <Route path="/buttons">
            <Buttons newInfo={this.state.newMember} newString={"TEST"} />
          </Route>
          <Redirect exact from="/" to="/home" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
