import React from 'react';
import './Person.css';

const Person = ({ image, name, quote, superlative }) => {
  return (
    <article className='person-card'>
      <img src={image} />
      <h3 className='name'>{name}</h3>
      <i className='quote'>{quote}</i>
      <b className='super'>{superlative}</b>
    </article>
  )
}

export default Person;
