import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import people from '../data/yearbook-data.js';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should hold staff and students in state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('staff')).toEqual(people.staff);
    expect(wrapper.state('students')).toEqual(people.students);
  });

  it('should save a snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})
