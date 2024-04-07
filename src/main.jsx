import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News/News';
import Search from './pages/Search/Search';
import BasicSearch from './pages/BasicSearch/BasicSearch';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import IndividualCard from './pages/AdvancedSearch/IndividualCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"about",
        element: <About></About>
      },
      {
        path:"news",
        element: <News></News>
      },
      {
        path:"search",
        element: <Search></Search>
      },
      {
        path:"basicsearch",
        element: <BasicSearch></BasicSearch>
      },
      {
        path:"advancedsearch",
        element: <AdvancedSearch></AdvancedSearch>
      },
      {
        path:"advancedsearch/:id",
        element: <IndividualCard></IndividualCard>,
        loader: ()=> fetch('dummyFabric.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
