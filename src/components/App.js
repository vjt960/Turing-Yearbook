import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff, 
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <main className="showcase">
        <Cohort title='Staff' people={this.state.staff} />
        <Cohort title='Students' people={this.state.students} />
      </main>
      </div>
    );
  }
}

export default App;
