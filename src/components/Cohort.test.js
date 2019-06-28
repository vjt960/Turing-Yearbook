import React from 'react';
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {

  let mockData;
  beforeEach(() => {
    mockData = [
      {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
      {id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'},
      {id: 3, name: 'Khalid', quote: 'Don\'t put the world on your shoulders.', superlative: 'Most Likely to Save the Planet from Alien Invasion', photo: './khalid.png'},
      {id: 4, name: 'Travis', quote: 'You do you.', superlative: 'Most Likely to Win a Grammy', photo: './travis.jpg'},
      {id: 5, name: 'Leta', quote: 'It\'s okay to be kind of a mess.', superlative: 'Most Likely to Go to the Moon', photo: './leta.jpg'}
    ];
  })

  it('has the right props', () => {
    const wrapper = mount(<Cohort  
      title='Staff' 
      people={mockData} 
      />);

      const mockObject = {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'};

      expect(wrapper.prop('people')).toContainEqual(mockObject);
  });

  it('renders all props as Person components', () => {
    const wrapper = mount(<Cohort  
      title='Staff' 
      people={mockData} 
      />);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Cohort  
      title='Staff' 
      people={mockData} 
      />);
      expect(wrapper).toMatchSnapshot();
  })
})