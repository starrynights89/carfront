import React, { Component } from 'react';
import './App.css';
import CarList from './components/Carlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CarList</h1>
        </header>
        <CarList />
      </div>
    );
  }
}

export default App;
