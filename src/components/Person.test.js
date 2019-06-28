import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person.js';

describe('Person', () => {
  it('works', () => {
    const person = {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'};
  const wrapper = shallow(
    <Person 
      image={person.photo} 
      name={person.name} 
      quote={person.quote} 
      superlative={person.superlative} 
      key={0}
    />
  );

  expect(wrapper).toMatchSnapshot();
  })
});