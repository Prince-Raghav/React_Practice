import React from 'react'
import {createBrowserRouter,RouterProvider} from'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';

const router=createBrowserRouter(
  [
    { 
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
        </div>
    },

    {
      path:'/about',
      element:
      <div>
        <Navbar/>
        <About/>
        </div>
    },

    {
      path:'/dashboard',
      element:
      <div>
        <Navbar/>
        <Dashboard/>
        </div>
    }

  ]
);
const App = () => {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
