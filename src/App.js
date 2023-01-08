import React, { useState, Component } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Root from './pages/Root';
import UserPage from './pages/UserPage';
import "./App.css"

class App extends Component {

 constructor(props) {
    super(props);
}

  componentDidMount() {
    
  }

  
  
  render() {
  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
      },
      {
        path: ":id",
        element: <UserPage />,
      },
    ]);
  
    return ( 
      <RouterProvider router={router} />
  );
}
}

export default App;