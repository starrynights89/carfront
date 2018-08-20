import React, { Component } from 'react'; 
import './App.css'; 
import Login from './components/Login';
//import CarList from './components/Carlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>CarList</Toolbar>
        </AppBar>
        <Login />
      </div>
    );
  }
}

export default App;