import React, { Component } from "react";
import { connect } from 'react-redux'
import {createCourse}   from '../../actions/courseAction'

class CoursesPage extends Component {
  constructor() {
    super();
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    //Declaramos un estado para almacenar el valor del input
    this.state = {
      course: { title: "" }
    }
  }
  //Cada vez que el input cambie, el valor se va a almacenar en el estado. 
  onTitleChange(event){
    //Sacamos una copia del estado. 
    const courseCopy = this.state.course;
    //Modificamos la copia
    courseCopy.title = event.target.value
    //Enviamos de vuelta el estado 
    this.setState({ course: courseCopy });
  }
  //Cuando se le da el botón de click, se manda la action y ésta se envía al reducer con el dispatch
  onClickSave(){
    //Se envía la acción por medio del creador de acciones envíandole el curso(contenido en el estado)
    this.props.createCourse(this.state.course);
  }
  //Función para pintar los cursos
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

//Función para recibir propiedades del estado de la tienda
//coursesReducer viene del nombre que se le dio en el rootreductor
function   mapStateToProps(state, ownProps){
  return {
      coursesFromReducer: state.coursesReducer
  } 
}
//Función para recibir acciones de la tienda. 
//se crea el nombre de la acción (createCourse), el parámetro que recibe 
//Y se coloca dispatch para ejecutar la acción y se llama al crrador de acciones
function mapDispatchToProps(dispatch){
return {
  createCourse: course => dispatch(createCourse(course))
}
}

//Se hace la conección entre el componente y redux
//Si se le psa mapDispatchToProps ya no existe la función dispatch en el componente
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

