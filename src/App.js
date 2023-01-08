import React, { useState, Component } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import "./App.css"

class App extends Component {

 constructor(props) {
    super(props);
}

  componentDidMount() {
    
  }

  
  
  render() {
  
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<HomePage />}>
        <Route path='/:id' element={UserPage} />
          
        </Route>
      )
    );
  
    return ( 
      <RouterProvider router={router} />
  );
}
}

export default App;