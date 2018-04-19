import React, { Component } from 'react';
import {Route, Switch} from 'react-router'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
    <p>Header</p>
    <Switch>
<Route path="/" exact component={HomePage}/>
<Route path="/about" component={AboutPage}/>
    </Switch>
    </div>
    );
  }
}

export default App;
