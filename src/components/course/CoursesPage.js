import React, { Component } from "react";
import { connect } from 'react-redux'
import * as  courseAction from '../../actions/courseAction'

class CoursesPage extends Component {
  constructor() {
    super();
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      course: { title: "" }
    }
  }
  onTitleChange(event){
    const courseCopy = this.state.course;
    courseCopy.title = event.target.value
    this.setState({ course: courseCopy });
  }
  onClickSave(){
    this.props.dispatch(courseAction.createCourse(this.state.course))
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  render() {
    return (
      <div className="coursespage">
        <h1>Courses</h1>
        {this.props.coursesFromReducer.map(this.courseRow)}
        <input
          type="text" 
          onChange={this.onTitleChange}
          ref="title-input"
        />
          <input
          type="submit"
          value="save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

function   mapStateToProps(state, ownProps){
  return {
      coursesFromReducer: state.coursesReducer
  }
}

export default connect(mapStateToProps)(CoursesPage);

