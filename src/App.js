import React, { useState, Component } from 'react';
import "./App.css"

class App extends Component {

 constructor(props) {
    super(props);
}

  componentDidMount() {
    
  }
  
  render() {
    return ( 
      <div>
        <a href='hotels'>Hotels</a>
        <a href='campains'>My Campains</a>
        <a href='profile'>My Profile</a>
        <a href='aboutus'>About Us</a>
      </div>
  );
}
}

export default App;