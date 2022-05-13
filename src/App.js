import React, { Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/layout/users/Users';

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <Navbar title=" Github Finder"> </Navbar>  
        <div className='container'>
        <Users/>      
        </div>
      </div>
    );
  }
}

export default App;
