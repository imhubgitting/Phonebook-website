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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
  
}

export default Course
