import React from 'react';
import Module from './Module';
import 'C:\Users\Vishal\Desktop\Project\Main\File\src\CourseBuilder.css';

function CourseBuilder() {
  return (
    <div className="course-builder">
      <h1>Course builder</h1>
      <Module title="Introduction to Trigonometry" />
      <button className="add-button">+ Add</button>
    </div>
  );
}

export default CourseBuilder;
