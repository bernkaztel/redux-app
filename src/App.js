import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CoursesPage from './components/course/CoursesPage'
import AboutPage from "./components/AboutPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
