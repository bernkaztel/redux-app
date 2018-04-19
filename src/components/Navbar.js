import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/"><button className="btn btn-success m-2">Home</button></Link>
        <Link to="/about"><button className="btn  btn-success m-2">About</button></Link>
        <Link to="/courses"><button className="btn  btn-success m-2">Courses</button></Link>
      </nav>
    )
  }
}
