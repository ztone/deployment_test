import React, { useState, Component } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

//Main
import Login from './pages/Login';

//Creators
import Hotels from './pages/Creator/Hotels';
import Hotel from './pages/Creator/Hotel';
import Enquire from './pages/Creator/Enquire';
import Campaigns from './pages/Creator/Campaigns';
import Profile from './pages/Creator/Profile';
import About from './pages/Creator/About';
import Menu from './pages/Creator/Menu';

//Hotel
import CalendarView from './pages/Hotel/CalendarView';
import ListView from './pages/Hotel/ListView';
import CreatorApp from './pages/Hotel/CreatorApp';
import BrowseCreators from './pages/Hotel/BrowseCreators';
import MyPersonas from './pages/Hotel/MyPersonas';
import CreateCampain from './pages/Hotel/CreateCampain';
import History from './pages/Hotel/History';

//css
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
        element: <Login />,
      },{
        path: "/menu",
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
      {
        path: "calendar",
        element: <CalendarView />,
      },
      {
        path: "listview",
        element: <ListView />,
      },
      {
        path: "creatorapp",
        element: <CreatorApp />,
      },
      {
        path: "browse",
        element: <BrowseCreators />,
      },
      {
        path: "mypersonas",
        element: <MyPersonas />,
      },
      {
        path: "createcampain",
        element: <CreateCampain />,
      },
      {
        path: "history",
        element: <History />,
      },
    ]);
  
    return ( 
      <RouterProvider router={router} />
  );
}
}

export default App;