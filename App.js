import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from './components/Post';
import People from './components/People';
import Profile from './components/Profile';
import RootUI from './components/RootUI';
import ErrorElement from './components/ErrorElement';
import Home from "./components/Home";


export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootUI />,
      errorElement : <ErrorElement/>,
      children : [
        {path : '/home' , element : <Home/>},
        {path : '/profile' , element : <Profile/>},
        {path : '/people' , element : <People/> } ,
        {path : '/world' , element : <Post/>}

      ],
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={myRouter} />
    </React.Fragment>
  );
}
