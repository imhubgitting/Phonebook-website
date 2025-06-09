// Gavin Antonacci 6/9/25 
import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>;

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
    ))}
  </div>
)

const Sum = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p><b>Total of {total} exercises</b></p>;
}

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Sum parts={course.parts} />
        </div>
      ))}
    </div>
  )

}

export default Course
