import logo from './logo.svg';
import './App.css';
import Counters from './Components/counters';
import React, { Component } from 'react'
import NavBar from './Components/navbar';

class App extends Component {
    state = {
      counters: [
          {id: 1, value: 0},
          {id: 2, value: 2},
          {id: 3, value: 3},
          {id: 4, value: 5},
          {id: 5, value: 4}
      ]
    }

    handleDelete = (id) => {
      const counter = this.state.counters.filter((c) => c.id != id);
      this.setState({counters: counter});
    }

    handleIncrement = (counter, a) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counter[index] = {...counter};
      counters[index].value += a;
      this.setState({counters: counters}); 
    }

    handleReset = () => {
      const counters = this.state.counters.map(count => {count.value = 0; return count});
      this.setState({counters: counters});
    }

  render() {
    return (
      <React.Fragment>
          <NavBar counter={this.state.counters}></NavBar>
          <main className='container'>
              <Counters
                counters={this.state.counters}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onReset={this.handleReset}>
              </Counters>
          </main>
      </React.Fragment>
    );
  }
}

export default App;
