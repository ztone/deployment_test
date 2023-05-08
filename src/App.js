import React, { useState, Component } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Root from './pages/Creator/Root';
import Hotels from './pages/Creator/Hotels';
import Hotel from './pages/Creator/Hotel';
import Enquire from './pages/Creator/Enquire';
import Campaigns from './pages/Creator/Campaigns';
import Profile from './pages/Creator/Profile';
import About from './pages/Creator/About';
import "./App.css"
import Menu from './pages/Creator/Menu';

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
        element: <Menu />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "hotels/hotel/:id",
        element: <Hotel />,
      },
      {
        path: "hotels/hotel/:id/enquire",
        element: <Enquire />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
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