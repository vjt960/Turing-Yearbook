import React from 'react';
import Person from './Person';
import './Cohort.css';
import App from './App';

// COHORT COMPONENT CODE GOES HERE
const Cohort = ({ title, people }) => {
  const group = people.map(person => {
    return (
      <Person 
      image={person.photo} 
      name={person.name} 
      quote={person.quote} 
      superlative={person.superlative} 
      key={people.indexOf(person)}
      />
    )
  });
  return (
    <section className='cohort-block'>
      <h2>{title}</h2>
      <div className='cohort-grid'>
        {group}
      </div>
    </section>
    );
};

export default Cohort;
