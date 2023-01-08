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
import Hotels from './pages/Hotels';
import Campaign from './pages/Campaign';
import Profile from './pages/Profile';
import About from './pages/About';
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
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "campaigns",
        element: <Campaign />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
    ]);
  
    return ( 
      <RouterProvider router={router} />
  );
}
}

export default App;