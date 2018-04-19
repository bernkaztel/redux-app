import React, { Component } from 'react';

export default class CoursesPage extends Component {
  render() {
    return (
      <div className="coursespage">
        { this.props.children }
      </div>
    )
  }
}
