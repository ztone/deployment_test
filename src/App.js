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
import Hotel from './pages/Hotel';
import Enquire from './pages/Enquire';
import Campaigns from './pages/Campaigns';
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