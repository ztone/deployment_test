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
        <ul>
          <li><a href='hotels'>Hotels</a></li>
          <li><a href='campains'>My Campains</a></li>
          <li><a href='profile'>My Profile</a></li>
          <li><a href='aboutus'>About Us</a></li>
        </ul>
      </div>
  );
}
}

export default App;