import React from 'react';
import './Person.css';

const Person = ({ image, name, quote, superlative }) => {
  return (
    <article className='person-card'>
      <img src={image} />
      <h3 className='text name'>{name}</h3>
      <i className='text quote'>{quote}</i>
      <b className='text super'>{superlative}</b>
    </article>
  )
}

export default Person;
